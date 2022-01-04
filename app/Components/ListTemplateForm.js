
export function listTemplateForm() {
  return /*html*/ `
<form onsubmit="app.listTemplatesController.createListTemplate()">
  <div class="form-group">
    <input type="text" name="name" class="form-control" placeholder="List Name..." minlength="3"
      maxlength="50" required>
  </div>
  <div class="form-group mt-2">
    <input type="color" name='color' class="form control form-control-color" id="exampleColorInput" value="#ffffff" title="Choose your color" required>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button class="btn btn-success">Create List</button>
  </div>
</form>
  `
}