/**/
const { AbstractModel } = await import('./svision/js/abstractModel.js?ver='+window.srcVersion);
const { HelloWorldEntity } = await import('./helloWorldEntity.js?ver='+window.srcVersion);
/*/
import AbstractModel from './svision/js/abstractModel.js';
import HelloWorldEntity from './helloWorldEntity.js';
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
    this.desktopEntity.addEntity(new HelloWorldEntity(this.desktopEntity, 0, 0, this.desktopWidth, 8, this.app.platform.colorByName('red')));
  } // init

} // class HelloWorldModel

export default HelloWorldModel;
