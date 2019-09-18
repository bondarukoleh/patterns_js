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
}

const elementsOnWebPage = [element]

class Driver {
  public name: any

  constructor() {
    this.name = 'Driver'
  }

  getElement(elementId: string) {
    return elementsOnWebPage.find((element) => element.id = elementId)
  }
}

class ElementFinder {
  constructor(private elementID) {
  }

  click() {
    console.log('Searching the element')
    const element = new Driver().getElement(this.elementID)
    console.log('Got element', element)
    console.log('Clicking on element...')
  }

  sendKeys(data) {
    console.log('Searching the element')
    const element = new Driver().getElement(this.elementID)
    console.log('Got element', element)
    console.log(`Sending the data: ${data}`)
  }
}

class DriverProxy {
  static MakeDriverProxy(targetObject) {
    return new Proxy(targetObject, {
      get(target: any, property: string | number | symbol, receiver: any): any {
        if (property === 'getElement') {
          return new Proxy(targetObject[property], {
            apply(target /*function targetObject[property]*/, thisArg /*driver object*/, argArray?: any): any {
              return new ElementFinder(argArray.shift())
            }
          })
        }
      },
    })
  }
}

const driver = DriverProxy.MakeDriverProxy(new Driver())

class MyPageObject {
  public somefield: any

  constructor() {
    this.somefield = driver.getElement('elementID') // lazy initialized, only when I call click/sendkeys on it
    // this.somefield = new Driver().getElement('elementID') // this will try to immediately search
  }

  sendKeysToSomeField(data) {
    this.somefield.sendkeys(data)
  }
}

function webUiTest() {
  // some setup
  const data = 'Some Value'

  // after that - browser maybe not running at all, and we cannot find elements.
  const page = new MyPageObject()

  // Only now we will search for element, and we more sure that it is on the page.
  page.sendKeysToSomeField(data)
}

webUiTest()