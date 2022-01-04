import { ProxyState } from "../AppState.js";
import { ListItem } from "../Models/ListItem.js";
import { saveState } from "../Utils/LocalStorage.js";





class ListItemsService {

  constructor() {
    ProxyState.on('listItems', saveState)
  }

  createListItem(newListItem) {
    ProxyState.listItems = [new ListItem(newListItem), ...ProxyState.listItems]
    console.log('list items', ProxyState.listItems)
    console.log('lists', ProxyState.listTemplates)
  }

  deleteListItem(listItemsId) {
    ProxyState.listItems = ProxyState.listItems.filter(l => l.id !== listItemsId)
  }

  // checkedItem(listItemId){
  //   ProxyState.listItems = ProxyState.listItems.forEach(c =>c.id = true)
  

}

export const listItemsService = new ListItemsService()