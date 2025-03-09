/**/
const { AbstractScreen } = await import('./rg-lib/js/abstractScreen.js?ver='+window.srcVersion);
const { HelloWorldView } = await import('./helloWorldView.js?ver='+window.srcVersion);
/*/
import AbstractScreen from './rg-lib/js/abstractScreen.js';
import HelloWorldView from './helloWorldView.js';
/**/
// begin code

export class HelloWorldScreen extends AbstractScreen {
  
  constructor(app, ctx) {
    super(app, ctx, 'HelloWorldScreen');
  } // constructor

  init() {
    super.init();

    this.borderView.bkColor = this.app.colorByName('green');
    this.desktopView.bkColor = this.app.colorByName('white');
    this.desktopView.addView(new HelloWorldView(this.desktopView, 0, 0, this.desktopWidth, 8, this.app.colorByName('red')));
  } // init

} // class HelloWorldScreen

export default HelloWorldScreen;
