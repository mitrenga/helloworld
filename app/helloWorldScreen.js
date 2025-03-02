/**/
const { AbstractScreen } = await import('./rg-lib/js/abstractScreen.js?ver='+window.srcVersion);
const { HelloWorldView } = await import('./helloWorldView.js?ver='+window.srcVersion);
/*/
import AbstractScreen from './rg-lib/js/abstractScreen-if.js';
import HelloWorldView from './helloWorldView-if.js';
/**/

export class HelloWorldScreen extends AbstractScreen {
  
  constructor(canvas, ctx) {
    super(canvas, ctx, 'HelloWorldScreen');
  } // constructor

  init() {
    super.init();

    this.borderView.backgroundColor = this.zxColor('green');
    this.desktopView.backgroundColor = this.zxColor('white');
    this.desktopView.addView(new HelloWorldView(this, 0, 0, this.desktopWidth, 8, this.zxColor('red')));
  } // init

} // class HelloWorldScreen

export default HelloWorldScreen;
