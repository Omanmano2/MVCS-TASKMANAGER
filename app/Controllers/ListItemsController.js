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

  deleteListItem(listTemplateId) {
    if (confirm('Are you sure you want to delete') == true) {
      console.log('list template id', listTemplateId)
      listItemsService.deleteListItem(listTemplateId)
     } else {
       
     }
    }


  // checkedItem(listItemId){
  //   console.log('item checked', listItemId)
  //   listItemsService.checkedItem(listItemId)
  // }

 }