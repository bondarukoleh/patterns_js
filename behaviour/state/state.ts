/* Problem: we have a login form with 4 possible conditions: With captcha, with touchID, with Info popup, simple form.
* in login method it will be
* if(captcha.isDisplayed()){
*   make actions of captcha
* } else if(touchId.isDisplayed()){
*   make touchId actions
* } else if(infoPopup.isDisplayed()){
*   make infoPopup actions
* ] else {
*  make login actions
* }*/

interface IContext {
  changeState: (state: IState) => void
  handleState: () => void
}

interface IState {
  setContext: (context: IContext) => void
  handle: () => void
}

class LoginForm implements IContext {
  private state: IState

  constructor(stateToStartFrom: IState) {
    this.changeState(stateToStartFrom)
  }


  changeState(state: IState) {
    this.state = state
    this.state.setContext(this)
    this.state.handle()
  }

  handleState() { /* login */
    this.state.handle()
  }
}

abstract class State implements IState {
  protected loginForm: IContext

  setContext(loginForm: IContext) {
    this.loginForm = loginForm
  }

  abstract handle()
}

class HandleCaptcha extends State implements IState {
  handle() {
    console.log('Checking captcha displayed. \n Making Captcha actions')
    this.loginForm.changeState(new HandleTouchID())
  }
}

class HandleTouchID extends State implements IState {
  handle() {
    console.log('Checking TouchID displayed. \n Making TouchID actions')
    this.loginForm.changeState(new HandleInfoPopup())
  }
}

class HandleInfoPopup extends State implements IState {
  handle() {
    console.log('Checking InfoPopup displayed. \n Making InfoPopup actions')
    this.loginForm.changeState(new HandleLogin())
  }
}

class HandleLogin extends State implements IState {
  handle() {
    console.log('Checking Login displayed. \n Making Login actions')
    console.log('Flow ended.')
  }
}

function clientCode() {
  const loginForm = new LoginForm(new HandleCaptcha())
  loginForm.handleState()
}

clientCode()
/*
Checking captcha displayed.
Making Captcha actions
Checking TouchID displayed.
Making TouchID actions
Checking InfoPopup displayed.
Making InfoPopup actions
Checking Login displayed.
Making Login actions
Flow ended.
Checking Login displayed.
Making Login actions
Flow ended.
*/
