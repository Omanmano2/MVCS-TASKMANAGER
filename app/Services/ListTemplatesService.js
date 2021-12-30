import { ProxyState } from "../AppState.js"
import { ListTemplate } from "../Models/ListTemplate.js"



class ListTemplatesService {
  constructor() {
    ProxyState.on('listTemplates')
  }

  createListTemplate(newListTemplate) {
    ProxyState.listTemplates = [new ListTemplate(newListTemplate), ...ProxyState.listTemplates]
    console.log('list template in proxy', ProxyState.listTemplates)
  }
}

export const listTemplatesService = new ListTemplatesService()