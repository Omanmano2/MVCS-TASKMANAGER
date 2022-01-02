import { listItemsService } from "../Services/ListItemsService.js"




export class ListItemsController{

  constructor() {
    console.log('hello from list items controller')
  }

  createListItem(listTemplateId) {
    window.event.preventDefault()
    let form = window.event.target
    const newListItem = {
      name: form.name.value,
      listTemplateId: listTemplateId
    }
    listItemsService.createListItem(newListItem)
    console.log('list item object', newListItem);
  }
 }