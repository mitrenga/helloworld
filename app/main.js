/**/
const { MainApp } = await import('./mainApp.js?ver='+window.srcVersion);
const { appPlatform } = await import('./appPlatform.js?ver='+window.srcVersion);
/*/
import MainApp from './mainApp.js';
import appPlatform from './appPlatform.js';
/**/
// begin code

var mainApp = new MainApp(appPlatform(), window.wsURL);

function loopGame(timestamp) {
  mainApp.loopApp(timestamp);
  requestAnimationFrame(loopGame);
} // loopGame

window.onresize = function(event) { mainApp.eventResizeWindow(event); }

// start application
mainApp.resizeApp();
requestAnimationFrame(loopGame);
