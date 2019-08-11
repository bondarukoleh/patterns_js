/* Easy ElementFinder for IOS and Android */

interface IElement {
  tap(): Promise<void>;
  sendKeys(value: string): Promise<void>;
  get(): Promise<object>;
}

interface IElementFinderAbstraction {
  findElementById(id: string): IElement
  findElementByName(name: string): IElement
  findElementByClass(classValue: string): IElement
  findElementByAccessibilityId(accessibilityId: string): IElement
}

interface IPlatformElementFinder extends IElementFinderAbstraction {
  driver: any /* device/emulator driver */
  platform: string
}

class AndroidElementFinder implements IPlatformElementFinder {
  public platform = 'Android'
  public driver: any
  private name = 'text';
  private id = 'resource-id';
  private classFinder = 'className';
  private accessibilityId = 'content-desc';

  constructor(driver: any){
    this.driver = driver;
  }

  findElementByAccessibilityId(id: string): IElement {
    return this.driver.element(this.accessibilityId, id)
  }

  findElementByName(name: string): IElement {
    return this.driver.element(this.name, name)
  }

  findElementById(id: string): IElement {
    return this.driver.element(this.id, id)
  }

  findElementByClass(classValue: string): IElement {
    return this.driver.element(this.classFinder, classValue)
  }
}

class IosElementFinder implements IPlatformElementFinder {
  public platform = 'IOS'
  public driver: any
  private name = 'value';
  private id = 'name';
  private classFinder = 'className';
  private accessibilityId = 'accessibility-id';

  constructor(driver: any){
    this.driver = driver;
  }

  findElementByAccessibilityId(id: string): IElement {
    return this.driver.element(this.accessibilityId, id)
  }

  findElementByName(name: string): IElement {
    return this.driver.element(this.name, name)
  }

  findElementById(id: string): IElement {
    return this.driver.element(this.id, id)
  }

  findElementByClass(classValue: string): IElement {
    return this.driver.element(this.classFinder, classValue)
  }
}


class ElementFinderAbstraction implements IElementFinderAbstraction {
  private platformElementFinder: IPlatformElementFinder

  constructor(platformElementFinder: IPlatformElementFinder) {
    this.platformElementFinder = platformElementFinder;
  }

  findElementByAccessibilityId(id: string): IElement {
    return this.platformElementFinder.findElementByAccessibilityId(id)
  }

  findElementByName(name: string): IElement {
    return this.platformElementFinder.findElementByName(name)
  }

  findElementById(id: string): IElement {
    return this.platformElementFinder.findElementById(id)
  }

  findElementByClass(classValue: string): IElement {
    return this.platformElementFinder.findElementByClass(classValue)
  }
}

async function bridgeIt(){
  const platform = process.env.PRLATFORM
  const driver = {
    element(searchStrategy: string, searchValue: string){
      /* finding element */
      return {/* this is element presentation */}
    }
  }

  const androidElementFinder = new AndroidElementFinder(driver)
  const iosElementFinder = new IosElementFinder(driver)
  const elementFinder = new ElementFinderAbstraction(platform === 'ios' ?
      iosElementFinder : androidElementFinder)
  const element = await elementFinder.findElementById('element_id');
  await element.sendKeys('some_value')
}

// bridgeIt()