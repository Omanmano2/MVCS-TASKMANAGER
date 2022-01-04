import { ProxyState } from "../AppState.js";
import { ListItem } from "../Models/ListItem.js";
import { ListTemplate } from "../Models/ListTemplate.js";




export function saveState() {
  localStorage.setItem('list objects', JSON.stringify({
    listItems: ProxyState.listItems,
    listTemplates: ProxyState.listTemplates
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('list objects'))
  console.log('load state data', data)
  if (data != null) {
    ProxyState.listTemplates = data.listTemplates.map(l => new ListTemplate(l))
    ProxyState.listItems = data.listItems.map(I => new ListItem(I))
  }
}