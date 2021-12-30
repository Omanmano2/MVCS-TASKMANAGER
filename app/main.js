import {ListTemplatesController } from "./Controllers/ListTemplatesController.js";

class App {
  // valuesController = new ValuesController();
  listTemplatesController = new ListTemplatesController()
}

window["app"] = new App();
