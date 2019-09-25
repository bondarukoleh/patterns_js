enum Action {
  on = 'on',
  off = 'off',
  moreBrightness = 'moreBrightness',
  lessBrightness = 'lessBrightness',
}

interface IReceiver {
  on(): void
  off(): void
  moreBrightness(): void
  lessBrightness(): void
}

class Lamp implements IReceiver {
  private turned: boolean = false
  private brighter: boolean = false

  on() {
    this.turned = true
    this.showSate()
  }

  off() {
    this.turned = false
    this.showSate()
  }

  moreBrightness() {
    this.brighter = true
    this.showSate()
  }

  lessBrightness() {
    this.brighter = false
    this.showSate()
  }

  private showSate() {
    console.log(`Lamp state is: 
    ${this.turned ? "Turned ON;" : "Turned OFF"}
    ${this.brighter ? "Brighter;" : "Not brighter"}
    `)
  };
}

interface ICommand {
  execute(): void;
  revert(): void;
}

class Command implements ICommand {
  constructor(private doAction: Action, private undoAction: Action, private receiver: IReceiver) {
  }

  execute(): void {
    this.receiver[this.doAction]()
  }

  revert(): void {
    this.receiver[this.undoAction]()
  }
}

interface IInvoker {
  runCommand(command: ICommand): void
  revertCommand(): void
}

class LampController implements IInvoker {
  private commands: Array<ICommand> = [] // we can add ability to add commands to queue and run them by chunks

  runCommand(command: ICommand) {
    command.execute()
    this.commands.push(command)
  }

  revertCommand() {
    const command = this.commands.pop()
    command.revert()
  }
}

function clientCode() {
  const lamp = new Lamp()
  const lampController = new LampController()
  const turnOn = new Command(Action.on, Action.off, lamp)
  const brighter = new Command(Action.moreBrightness, Action.lessBrightness, lamp)

  lampController.runCommand(turnOn)
  lampController.runCommand(brighter)
  lampController.revertCommand()
  lampController.revertCommand()
}

clientCode()