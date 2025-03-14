/**/
const { ZXTextEntity } = await import('./svision/js/platform/canvas2D/zxSpectrum/zxTextEntity.js?ver='+window.srcVersion);
/*/
import ZXTextEntity from './svision/js/platform/canvas2D/zxSpectrum/zxTextEntity.js';
/**/
// begin code

export class HelloWorldEntity extends ZXTextEntity {

  constructor(parentEntity, x, y, width, height, penColor) {
    super(parentEntity, x, y, width, height, 'Hello world!', penColor, false, 0, false);
    this.id = 'HelloWorldEntity';
  } // constructor

} // class HelloWorldEntity

export default HelloWorldEntity;
