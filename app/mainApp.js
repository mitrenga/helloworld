/**/
const { AbstractApp } = await import('./svision/js/abstractApp.js?ver='+window.srcVersion);
const { HelloWorldModel } = await import('./helloWorldModel.js?ver='+window.srcVersion);
const { ZXFonts8x8 } = await import('./svision/js/platform/canvas2D/zxSpectrum/zxFonts8x8.js?ver='+window.srcVersion);
/*/
import AbstractApp from './svision/js/abstractApp.js';
import HelloWorldModel from './helloWorldModel.js';
import ZXFonts8x8 from './svision/js/platform/canvas2D/zxSpectrum/zxFonts8x8.js';
/**/
// begin code

export class MainApp extends AbstractApp {
  
  constructor(platform, importPath, wsURL) {
    super(platform, 'bodyApp', importPath, wsURL);

    this.fonts = {};
    this.fonts.zxFonts8x8Mono = new ZXFonts8x8(this, false);

    this.model = new HelloWorldModel(this);
    this.model.init();
  } // constructor

} // class MainApp

export default MainApp;
