enum Events {
  news = 'news',
  issue = 'issue'
}

interface IPublisher /* or Subject, as you prefer */
{
  subscribe(subscriber: ISubscriber): void
  unSubscribe(subscriber: ISubscriber): void
  notify(event: Events, data: string): void
}

class WebMagazine implements IPublisher {
  private subscribers: Array<ISubscriber> = []

  notify(event: Events, data: string): void {
    console.log(`State change has happened: "${event}"`);
    for (const subscriber of this.subscribers) {
      subscriber.notify(event, data)
    }
  }

  subscribe(subscriber: ISubscriber): void {
    this.subscribers.push(subscriber)
    console.log(`Has a new subscriber "!!${Object.getPrototypeOf(subscriber).constructor.name}!!".`);
  }

  unSubscribe(subscriber: ISubscriber): void {
    const i = this.subscribers.indexOf(subscriber)
    this.subscribers.splice(i, 1)
    console.log(`"!!${Object.getPrototypeOf(subscriber).constructor.name}!!" has been unsubscribed.`);
  }
}

interface ISubscriber {
  notify(event: Events, data: string): void
}

class NewsSubscriber implements ISubscriber {
  notify(event: Events, data: string): void {
    // not elegant, but time is short
    if (event === Events.news) {
      console.log(`NewsSubscriber has news "${data}"`)
    }
  }
}

class NewsIssueSubscriber implements ISubscriber {
  notify(event: Events, data: string): void {
    if (event === Events.news) {
      console.log(`NewsIssueSubscriber has news "${data}"`)
    }
    if (event === Events.issue) {
      console.log(`NewsIssueSubscriber has new magazine issue "${data}"`)
    }
  }
}


function clientCode() {
  const magazine = new WebMagazine()
  const newsSubscriber = new NewsSubscriber()
  const newsIssueSubscriber = new NewsIssueSubscriber()

  magazine.subscribe(newsSubscriber)
  magazine.subscribe(newsIssueSubscriber)

  magazine.notify(Events.news, 'Some interesting news')
  magazine.unSubscribe(newsSubscriber)

  magazine.notify(Events.news, 'Some other interesting news')
}

clientCode()