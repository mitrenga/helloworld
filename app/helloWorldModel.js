/**/
const { AbstractModel } = await import('./svision/js/abstractModel.js?ver='+window.srcVersion);
const { ZXTextEntity } = await import('./svision/js/platform/canvas2D/zxSpectrum/zxTextEntity.js?ver='+window.srcVersion);
/*/
import AbstractModel from './svision/js/abstractModel.js';
import ZXTextEntity from './svision/js/platform/canvas2D/zxSpectrum/zxTextEntity.js';
/**/
// begin code

export class HelloWorldModel extends AbstractModel {
  
  constructor(app) {
    super(app);
    this.id = 'HelloWorldModel';
  } // constructor

  init() {
    super.init();

    this.borderEntity.bkColor = this.app.platform.colorByName('green');
    this.desktopEntity.bkColor = this.app.platform.colorByName('white');
    this.desktopEntity.addEntity(new ZXTextEntity(this.desktopEntity, 0, 0, this.desktopWidth, 8, 'Hello world!', this.app.platform.colorByName('red'), false, 0, false));
  } // init

} // class HelloWorldModel

export default HelloWorldModel;
