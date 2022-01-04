import { ProxyState } from "../AppState.js"
import { listTemplateForm } from "../Components/ListTemplateForm.js"
import { listTemplatesService } from "../Services/ListTemplatesService.js"




function _drawListTemplates() {
  let template = ''
  ProxyState.listTemplates.forEach(t => template += t.Template)
  document.getElementById('listArea').innerHTML = template
}

function _drawListTemplateForm() {
  document.getElementById('modal-body-slot').innerHTML = listTemplateForm()
}
export class ListTemplatesController {

  constructor() {
    ProxyState.on('listTemplates', _drawListTemplates)
    ProxyState.on('listItems', _drawListTemplates)
    _drawListTemplates()
  }

  createListTemplate() {
    window.event.preventDefault()
    let form = window.event.target
    const newListTemplate = {
      name: form.name.value,
      color: form.color.value,
    }
    console.log('new list Template', newListTemplate)
    listTemplatesService.createListTemplate(newListTemplate)

    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('listTemplateModal')).toggle()
 }

 deleteListTemplate(listTemplateId) {
  if (confirm('Are you sure you want to delete') == true) {
   console.log('list template id', listTemplateId)
   listTemplatesService.deleteListTemplate(listTemplateId)
  } else {
    
  }
 }
 drawListTemplateForm(){
   _drawListTemplateForm()
 }
}
