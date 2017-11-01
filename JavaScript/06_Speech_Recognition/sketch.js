// needs p5.speech.js library
// needs p5 library

function setup(){
    noCanvas();
    // language selection, browser language or en-US
    let lang = navigator.language || 'en-US';
    let speechRec = new p5.speechRec(lang, gotSpeech);
    // start listening
    speechRec.start();
    
    function gotSpeech(){
        console.log(speechRec)
    }
}