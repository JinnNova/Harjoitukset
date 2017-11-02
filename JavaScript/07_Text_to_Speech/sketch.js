// needs p5.speech.js library
// needs p5 library

// finally works, i just had wrong version of the speech lib. duh.
let speechObj;

function setup() {
  noCanvas();

  speechObj = new p5.Speech(); // speech synthesis object
  speechObj.onLoad = voiceReady;

    function voiceReady() {
        //console.log('voice ready');
        // list voice options
        console.log(speechObj.voices);
        // (Windows 7) + Chrome = 20 voice options.
    }

  speechObj.speak('Coding Train');
}