import Controller from './control/controller.js';
import Model from './model/model.js';
import View from  './view/view.js';

const app = new Controller(new Model, new View);
