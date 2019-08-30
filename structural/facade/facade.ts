class AudioConverter {
  convertAudio(){
    console.log('Doing some audio converting...');
  }
}

class VideoConverter {
  convertVideo(){
    console.log('Doing some video converting...');
  }
}

class Compressing {
  compress(){
    console.log('Doing some compressing...');
  }
}

class Formatting {
  format(){
    console.log('Doing some formatting...');
  }
}

class ComplexUploadSystem {
  login (){
    console.log('Login to cloud...');
  }
  prepareFile (){
    console.log('Prepare file...');
  }

  uploadFile (){
    console.log('Upload file...');
  }

  publishFile (){
    console.log('Publish file...');
  }
}

class MakeMediaFacade {
  constructor() {
  }

  makeMedia(file: string){
    file === 'audio' ? new AudioConverter().convertAudio() : new VideoConverter().convertVideo()
    new Compressing().compress()
    const uploader = new ComplexUploadSystem()
    uploader.login()
    uploader.prepareFile()
    uploader.uploadFile()
    uploader.publishFile()
  }
}

// super dumb example
function clientCode() {
  const makeMedia = new MakeMediaFacade()
  makeMedia.makeMedia('audio')
}

// clientCode()
