/*
* We'll implement lazy initialization for Web Element.
*
* Problem: Selenium getElement('locator') - is synchronous. So when we declare an element
* on page someElement = driver.getElement('ElementID') - it sends the request immediately to driver,
* but the element isn't there yet, and maybe even the browser has not started yet.
*
* Solution: Make an lazy initialization for element, means only when we want to make some action with it -
* send the request to search it by passed id.
* */

const element = {
  id: 'elementID',
  value: 'Element Value',
  elementAction(){
    console.log('making some action');
  }
}

const elements = [element];

class Driver {
  getElement(elementId: string){
    return elements.find((element) => element.id = elementId)
  }
}

class DriverProxy {
  static MakeDriverProxy(target) {
    return new Proxy(target, {
      get(target: any, property: string | number | symbol, receiver: any): any {
        console.log('Got get request');
        console.log(property);
        if(property === 'getElement'){
          return new Proxy(this, {
            // implement
          })
        }
      },
    })
  }
}

const driver = DriverProxy.MakeDriverProxy(new Driver())
const foundElement = driver.getElement('elementID')