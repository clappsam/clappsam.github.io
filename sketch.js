const FOLDER = 'Sounds/', EXT = '.mp3',
      INDEX_START1 = 1, INDEX_END1 = 85,
      LEN_SOUND1 = 1 + INDEX_END1 - INDEX_START1,
      sounds1 = Array(LEN_SOUND1);

const FOLDER2 = 'Voices/',
      INDEX_START2 = 1, INDEX_END2 = 54,
      LEN_SOUND2 = 1 + INDEX_END2 - INDEX_START2,
      sounds2 = Array(LEN_SOUND2);
 
var idx1 = 0, idx2 = 0;
var button;
var startTime = 0;
const MAX_TIME_MS = 420 * 1000; // 7 minutes in milliseconds

function preload() {
  for (let i = 0; i < LEN_SOUND1; ++i) {
    sounds1[i] = loadSound(FOLDER + (i + INDEX_START1) + EXT);
    sounds1[i].onended(playNext);
    print(FOLDER + (i + INDEX_START1) + EXT);
  }
  for (let i = 0; i < LEN_SOUND2; ++i) {
    sounds2[i] = loadSound(FOLDER2 + (i + INDEX_START2) + EXT);
    sounds2[i].onended(playNext2);
    print(FOLDER + (i + INDEX_START2) + EXT); 
  }
}

function setup() {
  shuffle(sounds1, true);
  shuffle(sounds2, true);
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER);
  fill(0);
  noStroke();
  text("CLICK TWICE", width/2, height/2);
    //leave in!!! 
}

function mousePressed() {
    playNext();
    playNext2();
    var d = new Date();
    startTime = d.getTime();
    background(0);
    textAlign(CENTER);
    fill(255);
    noStroke();
    text("EVERYBODY'S TALKING ABOUT IT", width/2, height/2);
}

function playNext() {
  console.log(`Finished sound index ${idx1}: ${this.src}.`);
    var d = new Date();
    var timeNow = d.getTime();
    var elapsed = timeNow - startTime;
    if (elapsed < MAX_TIME_MS) {
        idx1 = (idx1 + 1) % sounds1.length;
        sounds1[idx1].play();
    }
}

function playNext2() {
    console.log(`Finished sound index ${idx1}: ${this.src}.`);
    var d = new Date();
    var timeNow = d.getTime();
    var elapsed = timeNow - startTime;
    if (elapsed < MAX_TIME_MS) {
        idx2 = (idx2 + 1) % sounds2.length;
        sounds2[idx2].play() 
    }
}