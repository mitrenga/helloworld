/**/
const { AbstractModel } = await import('./svision/js/abstractModel.js?ver='+window.srcVersion);
const { TextEntity } = await import('./svision/js/platform/canvas2D/textEntity.js?ver='+window.srcVersion);
/*/
import AbstractModel from './svision/js/abstractModel.js';
import TextEntity from './svision/js/platform/canvas2D/textEntity.js';
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
    this.desktopEntity.addEntity(new TextEntity(this.desktopEntity, this.app.fonts.zxFonts8x8Mono, 0, 0, this.desktopWidth, 8, 'Hello world!', this.app.platform.colorByName('red'), false, {}));
  } // init

} // HelloWorldModel

export default HelloWorldModel;
