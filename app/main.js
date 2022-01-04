import { ListItemsController } from "./Controllers/ListItemsController.js";
import {ListTemplatesController } from "./Controllers/ListTemplatesController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  // valuesController = new ValuesController();
  listTemplatesController = new ListTemplatesController()

  listItemsController = new ListItemsController()
}

loadState()

window["app"] = new App();
