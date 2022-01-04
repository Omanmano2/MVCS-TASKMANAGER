import { generateId } from "../Utils/generateId.js"





export class ListItem {

  constructor(data) {
    this.name = data.name
    this.id = generateId()
    this.listTemplateId = data.listTemplateId 
    this.done = false
  }

  get Template() {
    return /*html*/ `
    <li class="py-3 text-even">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." onclick="app.listItemsService.checkedItem('${this.id}')">
      ${this.name}
      <i class="mdi mdi-delete selectable" onclick="app.listItemsController.deleteListItem('${this.id}')"></i>
    </li>
    `
  }
}