interface IProfileIterator {
  hasNext(): boolean;
  getNext(): Profile;
  reset(): void;
}

interface ISocialNetworkCollection {
  createFriendsIterator(email): IProfileIterator
  createCoworkersIterator(email): IProfileIterator
}

enum IteratorType {
  friends = 'friends',
  coWorkers = 'coWorkers'
}

class FaceBookIterator implements IProfileIterator {
  private collection: FaceBook
  private email: string // get friends of this guy to iterate on them
  private type: IteratorType // not used, but could be
  private currentPosition: number = 0
  private friendsProfiles: Array<Profile> = []


  constructor(faceBookCollection: FaceBook, email: string, iteratorType: IteratorType) {
    this.collection = faceBookCollection
    this.email = email
    this.type = iteratorType
  }

  getNext(): Profile {
    if (!this.hasNext()) {
      return null
    }

    return this.friendsProfiles[this.currentPosition++]
  }

  hasNext(): boolean {
    if (!this.friendsProfiles.length) { // we will get the friends if this is first of iterator
      this.loadFriendsProfiles()
    }
    return this.currentPosition <= this.friendsProfiles.length
  }

  reset(): void { // not used for now
    this.currentPosition = 0
  }

  private loadFriendsProfiles() {
    this.friendsProfiles = this.collection.getProfileFromFaceBook(this.email).friends
  }
}

class FaceBook implements ISocialNetworkCollection {
  private profiles: Array<Profile> = []

  constructor(profiles?: Array<Profile>) {
    if (profiles.length) {
      this.profiles = profiles
    } else {
      this.profiles = null // get profiles from facebook
    }
  }

  public getProfileFromFaceBook(profileEmail: string): Profile | null {
    // some API call to get profiles
    return this.profiles.find(({email}) => email === profileEmail)
  }

  createFriendsIterator(email): IProfileIterator {
    return new FaceBookIterator(this, email, IteratorType.friends)
  }

  createCoworkersIterator(email): IProfileIterator {
    return new FaceBookIterator(this, email, IteratorType.coWorkers)
  }
}

class Profile {
  public friends: Array<Profile> = []

  constructor(public email: string, public name: string, ...friends) {
    this.friends = friends
  }
}

const rick = new Profile('rick@gmail.com', 'Rick')
const bob = new Profile('bob@gmail.com', 'Bob', rick)
const jack = new Profile('jack@gmail.com', 'Jack', bob)
const jim = new Profile('jim@gmail.com', 'Jim', jack, bob)
const james = new Profile('james@gmail.com', 'James', jim, rick)
const jessica = new Profile('jessica@gmail.com', 'Jessica', james)
const peta = new Profile('peta@gmail.com', 'Peta', jessica, bob, rick)
const predefinedProfiles: Array<Profile> = [bob, jack, jim, james, jessica, peta]

class Spamer {
  constructor(private network: ISocialNetworkCollection) {
  }

  sendSpamToFriendsOf(email: string, message: string) {
    const iterator = this.network.createFriendsIterator(email)
    // we also could implement Profile with [Symbol.iterator] declared, to use simple "for of"
    for (let profile = iterator.getNext(); iterator.hasNext(); profile = iterator.getNext()) {
      this.sendMassage(profile.email, message)
    }
  }

  // sendSpamToCoWorkersOf(){] also could be implemented
  private sendMassage(email: string, message: string) {
    console.log(`Message "${message}" is sent to "${email}"`)
  }
}

function clientCode() {
  const faceBook = new FaceBook(predefinedProfiles)
  const spamer = new Spamer(faceBook)
  const message = `Hello. I'm spam`

  spamer.sendSpamToFriendsOf(predefinedProfiles[predefinedProfiles.length - 1].email, message)
}

clientCode()