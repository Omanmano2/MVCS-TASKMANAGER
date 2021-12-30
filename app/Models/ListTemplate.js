import { generateId } from "../Utils/generateId.js";



export class ListTemplate { 
  constructor(data) {
    this.id = data.id || generateId()
    this.color  = data.color
    this.name = data.name
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-3 p-5">
    <div class="row flex-column mt-5 border border-dark rounded">
      <div class="col pt-1 fs-4 rounded border border-dark" style="background-color: ${this.color}">
        <p class="text-end">
          <i class="mdi mdi-delete selectable" onclick="app.listTemplateController.deleteListTemplate(${this.id})"></i>
        </p>
        <span class="text-center">
          <p>${this.name}</p>
          <p>N/A</p>
        </span>
      </div>
      <div class="col p-0 fs-4">
        <ul class="list-group" id="listReciever">
            <!--list item template -->
          <li class="list-group-item py-3">
            <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
            First checkbox
          </li>

        </ul>
      </div>
      <form onsubmit="app.listingsController.createListItem('${this.id}')" class="p-0 border border-dark">
        <div class="form-group d-flex">
          <!-- Input field for toppings -->
          <input type="text" name="name" class="form-control" placeholder="ListItem....">
          <button class="btn btn-success">+</button>
        </div>
      </form>
    </div>
  </div>`
    
  }
}