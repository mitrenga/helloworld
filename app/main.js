/**/
const { MainApp } = await import('./mainApp.js?ver='+window.srcVersion);
const { ZXSpectrum48KPlatform } = await import('./rg-lib/js/platform/zxSpectrum/zxSpectrum48KPlatform.js?ver='+window.srcVersion);
/*/
import MainApp from './mainApp.js';
import ZXSpectrum48KPlatform from './rg-lib/js/platform/zxSpectrum/zxSpectrum48KPlatform.js';
/**/
// begin code

var platform = new ZXSpectrum48KPlatform();
var mainApp = new MainApp(platform, window.wsURL);
var audio = null;

function resizeGame() {
  var elementRoot = document.documentElement;
  if (window.innerHeight != mainApp.element.height) {
    elementRoot.style.setProperty('--app-height', window.innerHeight+'px');
  }
  mainApp.resizeApp();
} // resizeGame

// main loop
function loopGame() {
  requestAnimationFrame(loopGame);
  mainApp.loopApp();
} // loopGame

// disable right click popup me
mainApp.element.oncontextmenu = function (e) {
  e.preventDefault();
};

// join mouse events
mainApp.element.onclick = function (e) { 
  mainApp.onClick(e);
};

// join resize event
window.addEventListener('resize', resizeGame);

resizeGame();  // calc actual screen size
loopGame();    // start game
