import { ListItemsController } from "./Controllers/ListItemsController.js";
import {ListTemplatesController } from "./Controllers/ListTemplatesController.js";

class App {
  // valuesController = new ValuesController();
  listTemplatesController = new ListTemplatesController()

  listItemsController = new ListItemsController()
}

window["app"] = new App();
