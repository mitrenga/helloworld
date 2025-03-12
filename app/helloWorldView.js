/**/
const { ZXTextView } = await import('./svision/js/platform/canvas2D/zxSpectrum/zxTextView.js?ver='+window.srcVersion);
/*/
import ZXTextView from './svision/js/platform/canvas2D/zxSpectrum/zxTextView.js';
/**/
// begin code

export class HelloWorldView extends ZXTextView {

  constructor(parentView, x, y, width, height, penColor) {
    super(parentView, x, y, width, height, 'Hello world!', penColor, false, 0, false);
    this.id = 'HelloWorldView';
  } // constructor

} // class HelloWorldView

export default HelloWorldView;
