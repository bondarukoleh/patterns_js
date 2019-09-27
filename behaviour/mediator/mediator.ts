type ElementEvent = {action?: string, state?: boolean, data?: string}

interface IMediator {
  notify(sender: object, event: ElementEvent): void;
}

class Mediator implements IMediator {
  constructor(private nameInput: NameInput, private rememberMeCheckbox: RememberMeCheckbox) {
  }

  notify(sender: object, event: ElementEvent): void {
    if(sender instanceof NameInput){
      if(event.action === 'data' && !!event.data){
        console.log(`Triggering actions needed to validate data: ${event.data}`);
      }
    }
    if(sender instanceof RememberMeCheckbox){
      if(event.action === 'click' && !!event.state){
        console.log(`Triggering actions needed to process "RememberMe" checkbox`);
      }
    }
  }
}

class BaseElement {
  protected mediator: Mediator

  setMediator(mediator: Mediator){
    this.mediator = mediator
  }
}

class NameInput extends BaseElement {
  click() {
    console.log(`NameInput clicked.`)
    this.mediator.notify(this, {action: 'click'})
  }

  dataEntered(data) {
    console.log(`Data entered to NameInput.`)
    this.mediator.notify(this, {action: 'data', data: data})
  }
}

class RememberMeCheckbox extends BaseElement {
  check(state: boolean) {
    console.log(`RememberMeCheckbox clicked.`)
    this.mediator.notify(this, {action: 'click', state: true})
  }
}

function clientCode() {
  const nameInput = new NameInput()
  const rememberMeCheckbox = new RememberMeCheckbox()
  const mediator = new Mediator(nameInput, rememberMeCheckbox)

  nameInput.setMediator(mediator)
  rememberMeCheckbox.setMediator(mediator)


  nameInput.dataEntered("Bob")
  rememberMeCheckbox.check(true)
}
clientCode()