import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class ListTemplate {
  constructor(data) {
    this.id = data.id || generateId()
    this.color = data.color
    this.name = data.name
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-3 p-5">
    <div class="row flex-column mt-5 border border-dark rounded">
      <div class="col pt-1 fs-4 rounded border border-dark" style="background-color: ${this.color}">
        <p class="text-end">
          <i class="mdi mdi-delete selectable" onclick="  app.listTemplatesController.deleteListTemplate('${this.id}')"></i>
        </p>
        <span class="text-center">
          <p>${this.name}</p>
          <p>N/A</p>
        </span>
      </div>
      <div class="col p-0 fs-4">
        <h6>To-Do-List<h6>
        <ul>
           ${this.ListItems}
        </ul>
      </div>
      <form onsubmit="app.listItemsController.createListItem('${this.id}')" class="p-0 border border-dark">
        <div class="form-group d-flex">
          <input type="text" name="name" class="form-control" placeholder="Add item....">
          <button class="btn btn-success">+</button>
        </div>
      </form>
    </div>
  </div>`

  }

  get ListItems() {
    let template = ''
    let foundListItems = ProxyState.listItems.filter(l => l.ListTemplateId == this.id)
    foundListItems.forEach(l => template += l.Template)
    console.log('found list item', foundListItems)
    return template
  }
}