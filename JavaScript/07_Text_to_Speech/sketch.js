// needs p5.speech.js library
// needs p5 library

// finally works, i just had wrong version of the speech lib. duh.
let speechObj;

function setup() {
    createCanvas(400,50);
    background(0);

    speechObj = new p5.Speech(); // speech synthesis object
    speechObj.onLoad = voiceReady;

    speechObj.started(startSpeaking);
    speechObj.ended(endSpeaking);

    function startSpeaking(){
        background(0,255,0);
    }
    function endSpeaking(){
        background (0,0,0)
    }

    function voiceReady() {
        //console.log('voice ready');
        // list voice options
        console.log(speechObj.voices);
        // (Windows 7) + Chrome = 20 voice options.
    }
}

function mousePressed() {
    // this is how you can change the voice
    //speechObj.setVoice('Google UK English Female');

    // random voice every click
    let voiceOptions = speechObj.voices;
    let voice = random(voiceOptions);
    console.log(voice.name);
    speechObj.setVoice(voice.name)

    speechObj.speak('Hello person');
}