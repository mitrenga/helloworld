/**/
const { AbstractApp } = await import('./svision/js/abstractApp.js?ver='+window.srcVersion);
const { HelloWorldScreen } = await import('./helloWorldScreen.js?ver='+window.srcVersion);
/*/
import AbstractApp from './svision/js/abstractApp.js';
import HelloWorldScreen from './helloWorldScreen.js';
/**/
// begin code

export class MainApp extends AbstractApp {
  
  constructor(platform, wsURL) {
    super(platform, 'bodyApp', wsURL);

    this.screen = new HelloWorldScreen(this);
    this.screen.init();
  } // constructor

} // class MainApp

export default MainApp;
