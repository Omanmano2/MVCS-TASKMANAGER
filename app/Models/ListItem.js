import { generateId } from "../Utils/generateId.js"





export class ListItem {

  constructor(data) {
    this.listingname = data.listingname
    this.id = generateId()
    this.listTemplateId = data.listTemplateId
  }

  get Template() {
    return /*html*/ `
    <li class="py-3 text-even">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      ${this.listingname}
      <i class="mdi mdi-delete selectable" onclick="app.listItemsService.deleteListItem(${this.id})"></i>
    </li>
    `
  }
}