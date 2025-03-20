/**/
const { MainApp } = await import('./mainApp.js?ver='+window.srcVersion);
const { appPlatform } = await import('./appPlatform.js?ver='+window.srcVersion);
/*/
import MainApp from './mainApp.js';
import appPlatform from './appPlatform.js';
/**/
// begin code

var mainApp = new MainApp(appPlatform, window.wsURL);
var audio = null;

function resizeGame() {
  var elementRoot = document.documentElement;
  if (window.innerHeight != mainApp.element.height) {
    elementRoot.style.setProperty('--app-height', window.innerHeight+'px');
  }
  mainApp.resizeApp();
} // resizeGame

// main loop
function loopGame(timestamp) {
  mainApp.loopApp(timestamp);
  requestAnimationFrame(loopGame);
} // loopGame

// resize event
window.onresize = function(e) { resizeGame(); }

resizeGame();  // calc actual model size
loopGame();    // start game
