//////////////////////////////////////////////////////////////////////////////
//                                                                          //
//                    MY AUDIO FUNCTIONS                                    //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
// RR 7/25/23 keeping tone code inline for now, based on example at https://github.com/Tonejs/Tone.js/blob/master/examples/simpleHtml.html

   function initSound() {
  //await Tone.start();
  //prints a message in inspect-> console confirming audio is ready
    Tone.start();
    console.log('audio is ready');
  }

    const CMaj = ["C4","E4","G4","C5"];
    const CMaj7 = ["C4","E4","G4","B4"];
    const C7 = ["C4","E4","G4","A#4"]; //not used, want a starker contrast
    const CMin7 = ["C4","D#4","G4","A#4"]; 
    const CHorror = ["C4","C#4","E4","E#4"];
    const CHorrorWorse = ["C4","C#4","D5","D#5"];
    const CHorrorShrill = ["C4","C#4","D5","D#6"];

    const aqiGood = CMaj
    const aqiModerate = CMaj7
    const aqiUnhealthySensitive = CMin7
    const aqiUnhealthy = CHorror
    const aqiVeryUnhealthy = CHorrorWorse
    const aqiHazardous = CHorrorShrill

  function playNote() {
    // create a synth
    const synth = new Tone.Synth().toDestination();
    // play a note from that synth       
    synth.triggerAttackRelease("C4", "8n");
  }

  function arpeggiateChord() {
    // per documentation, PolySynth can handle multiple notes
    //major chord
    const synth = new Tone.PolySynth().toDestination();
    var now = Tone.now()     
    var listChord = ["C4","E4","G4","C5"]
    synth.triggerAttack([listChord[0]], now);
    synth.triggerAttack([listChord[1]], now + 0.5);
    synth.triggerAttack([listChord[2]], now + 1);
    synth.triggerAttack([listChord[3]], now + 1.5);
    synth.triggerRelease([listChord[0], listChord[1], listChord[2], listChord[3]], now + 4);
  }

  function playChord(listChord) {
    console.log(listChord);
    const synth = new Tone.PolySynth().toDestination();
    var now = Tone.now()     
    synth.triggerAttack([listChord[0], listChord[1], listChord[2], listChord[3]], now);
    synth.triggerRelease([listChord[0], listChord[1], listChord[2], listChord[3]], now + 1);
  }


function playChordByAQI(aqi) {  
  if (aqi < 51) {playChord(aqiGood)}
    else if (aqi < 101) {playChord(aqiModerate)}
    else if (aqi < 151) {playChord(aqiUnhealthySensitive)}
    else if (aqi < 201) {playChord(aqiUnhealthy)}
    else if (aqi < 251) {playChord(aqiVeryUnhealthy)}
    else if (aqi < 301) {playChord(aqiHazardous)}

}



//////////////////////////////////////////////////////////////////////////////
//                                                                          //
//              MY VISUAL and MISC SOUND FUNCTIONS                          //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////

      
  const playForecast = function() {
  //hardcoded for now to play through all possible forecasts
  alert('Playing Demo Forecast')  
  playChord(aqiGood);
    setTimeout(function() {
        playChord(aqiModerate);
    }, 1000);
    setTimeout(function() {
        playChord(aqiUnhealthySensitive);
    }, 2000);
    setTimeout(function() {
        playChord(aqiUnhealthy);
    }, 3000);
    setTimeout(function() {
        playChord(aqiVeryUnhealthy);
    }, 4000);
    setTimeout(function() {
        playChord(aqiHazardous);
    }, 5000);
  }