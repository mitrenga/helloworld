/**/
const { AbstractApp } = await import('./svision/js/abstractApp.js?ver='+window.srcVersion);
const { HelloWorldModel } = await import('./helloWorldModel.js?ver='+window.srcVersion);
/*/
import AbstractApp from './svision/js/abstractApp.js';
import HelloWorldModel from './helloWorldModel.js';
/**/
// begin code

export class MainApp extends AbstractApp {
  
  constructor(platform, wsURL) {
    super(platform, 'bodyApp', wsURL);

    this.model = new HelloWorldModel(this);
    this.model.init();
  } // constructor

} // class MainApp

export default MainApp;
