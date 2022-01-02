import { ProxyState } from "../AppState.js"
import { ListTemplate } from "../Models/ListTemplate.js"
import { listItemsService } from "./ListItemsService.js"



class ListTemplatesService {
  constructor() {
    ProxyState.on('listTemplates')
  }

  createListTemplate(newListTemplate) {
    ProxyState.listTemplates = [new ListTemplate(newListTemplate), ...ProxyState.listTemplates]
    console.log('list template in proxy', ProxyState.listTemplates)
  }

  deleteListTemplate(listTemplateId) {
    ProxyState.listTemplates = ProxyState.listTemplates.filter(t => t.id !== listTemplateId)
    listItemsService.deleteListItem(listTemplateId)
    
  }
}

export const listTemplatesService = new ListTemplatesService()