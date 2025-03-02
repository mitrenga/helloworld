/**/
const { AbstractApp } = await import('./rg-lib/js/abstractApp.js?ver='+window.srcVersion);
const { HelloWorldScreen } = await import('./helloWorldScreen.js?ver='+window.srcVersion);
/*/
import AbstractApp from './rg-lib/js/abstractApp-if.js';
import HelloWorldScreen from './helloWorldScreen-if.js';
/**/

export class MainApp extends AbstractApp {
  
  constructor(wsURL) {
    super(wsURL);

    this.screen = new HelloWorldScreen(this, this.ctx);
    this.screen.init();
  } // constructor

} // class MainApp

export default MainApp;
