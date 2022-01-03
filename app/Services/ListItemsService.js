import { ProxyState } from "../AppState.js";
import { ListItem } from "../Models/ListItem.js";





class ListItemsService {

  constructor() {
    ProxyState.on('listItems')
  }

  createListItem(newListItem) {
    ProxyState.listItems = [new ListItem(newListItem), ...ProxyState.listItems]
    console.log('list items', ProxyState.listItems)
    console.log('lists', ProxyState.listTemplates)
  }

  deleteListItem(listTemplateId) {
    ProxyState.listItems = ProxyState.listItems.filter(l => l.listTemplateId !== listTemplateId)
  }
}

export const listItemsService = new ListItemsService()