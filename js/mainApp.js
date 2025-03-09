/*/
const { AbstractApp } = await import('./rg-lib/js/abstractApp.js?ver='+window.srcVersion);
const { HelloWorldScreen } = await import('./helloWorldScreen.js?ver='+window.srcVersion);
/*/
import AbstractApp from './rg-lib/js/abstractApp.js';
import HelloWorldScreen from './helloWorldScreen.js';
/**/
// begin code

export class MainApp extends AbstractApp {
  
  constructor(platform, wsURL) {
    super(platform, wsURL);

    this.screen = new HelloWorldScreen(this, this.ctx);
    this.screen.init();
  } // constructor

} // class MainApp

export default MainApp;
