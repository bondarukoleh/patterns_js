import * as assert from 'assert'

enum Requests {
  base = 'base',
  special = 'special',
  superSpecial = 'superSpecial',
  withOutHandler = 'requestWithoutHandler'
}

interface IRequestHandler {
  handle(request: Requests): boolean
  setHandler(handler: IRequestHandler): IRequestHandler
  nextHandler: IRequestHandler
}

class Handler implements IRequestHandler {
  public nextHandler: IRequestHandler

  handle(request: Requests): boolean {
    if (this.nextHandler) {
      return this.nextHandler.handle(request)
    }
    console.log(`NO HANDLER FOR "${request}"!!!`);
    return false
  }

  setHandler(handler: IRequestHandler): IRequestHandler {
    this.nextHandler = handler
    return handler
  }
};

class BaseHandler extends Handler {
  constructor(){
    super()
  }

  handle(request: Requests): boolean {
    if (request === 'base') {
      console.log('Handling base request...');
      return true;
    }
    return super.handle(request)
  }
}

class SpecialHandler extends Handler {
  handle(request: Requests): boolean {
    if (request === 'special') {
      console.log('Handling special request...');
      return true;
    }
    return super.handle(request)
  }
}

class SuperSpecialSpecialHandler extends Handler {
  handle(request: Requests): boolean {
    if (request === 'superSpecial') {
      console.log('Handling superSpecial request...');
      return true;
    }
    return super.handle(request)
  }
}

class HandlerGenerator {
  constructor(private handlers: Array<{new(): IRequestHandler}>) {}

  generateHandler(): IRequestHandler{
    const handler = new Handler()
    /*
    * I'm setting handlers without order, but we can do something like
    * const specialHandler = new SpecialHandler()
    * const superSpecialSpecialHandler = new SuperSpecialSpecialHandler()
    *
    * const handler = new Handler()
    * handler.setHandler(specialHandler).setHandler(superSpecialSpecialHandler)
    * return handler
    *
    * And we know that specialHandler will first handle request before superSpecialSpecialHandler
    * */
    this.handlers.reduce((handler, currentHandler) => handler.setHandler(new currentHandler()), handler)
    return handler;
  }
}

function clientCode() {
  const handlers = [BaseHandler, SpecialHandler, SuperSpecialSpecialHandler]
  const handler = new HandlerGenerator(handlers).generateHandler()

  const requests = [Requests.base, Requests.special, Requests.superSpecial, Requests.withOutHandler]

  for(const request of requests){
    const handled = handler.handle(request)
    assert(handled, `Request "${request}" is not handled!`)
  }
}
clientCode()
