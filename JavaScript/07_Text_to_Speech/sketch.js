// needs p5.speech.js library
// needs p5 library
// needs p5.dom.js library

// finally works, i just had wrong version of the speech lib. duh.
let speechObj;

// UI elements
let label, input, checkbox, speakbutton, vslider, rslider, pslider;

function setup() {
    createCanvas(400,50);
    background(0);

    speechObj = new p5.Speech(); // speech synthesis object
    speechObj.onLoad = voiceReady;

    speechObj.started(startSpeaking);
    speechObj.ended(endSpeaking);


    // Button
    speakbutton = createButton("Speak");
    speakbutton.position(20,100);
    speakbutton.mousePressed(doSpeak);

    // Volume slider
    vslider = createSlider(0.,100.,100.)
    vslider.position(20, 140);
    vslider.mouseReleased(setVolume);

    // Labels
    label = createDiv("Volume");
    label.position(160,140);


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

function setVolume(){
    speechObj.setVolume(vslider.value()/100.);
}

function doSpeak() {
    // this is how you can change the voice
    //speechObj.setVoice('Google UK English Female');

    // how to set the speed (half = 0.5, 2x = 2 etc.)
    speechObj.setRate(1);

    // random voice every click
    let voiceOptions = speechObj.voices;
    let voice = random(voiceOptions);
    console.log(voice.name);
    speechObj.setVoice(voice.name)

    speechObj.speak('Hello person');
}