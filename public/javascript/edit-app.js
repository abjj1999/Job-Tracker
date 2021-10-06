async function editFormHandler() {

  const jobTitle = document.querySelector('input[name="app-title-edit"]').value;
  const companyName = document.querySelector('input[name="company-title-edit"]').value;
  const companyURL = document.querySelector('input[name="post-url-edit"]').value;
  const description = document.querySelector('textarea[name="description-edit"]').value;
  const date = document.querySelector('input[name="date-edit"]').value;
  const statusArr = document.querySelector('select[name="status-edit"]').options;
  const status = statusArr[statusArr.selectedIndex].text;
  const notify_me = document.querySelector('input[name="notify-me-edit"]').checked;


  const id = this.parentNode.parentNode.parentNode.firstElementChild.getAttribute('id');
  console.log(id);
  const response = await fetch(`/api/applications/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      jobTitle,
      companyName,
      companyURL,
      description,
      date,
      status,
      notify_me
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }

}

const editBtns = document.querySelectorAll('.edit-btn');

editBtns.forEach(editBtn => {
  const parent = editBtn.parentNode.parentNode.parentNode;
  const jobLabel = parent.getElementsByTagName('label')[0];
  const companyInput = parent.getElementsByTagName('h4')[0];
  const companyURL = parent.getElementsByTagName('a')[0];
  const dateApplied = parent.getElementsByTagName('span')[0];
  const descriptionEdit = parent.getElementsByTagName('span')[1];
  const statusEdit = parent.getElementsByTagName('span')[2];
  const notifyEdit = parent.getElementsByTagName('p')[4];
  $(editBtn).on('click', function() {
    var job = jobLabel.textContent;
    var jobTitleInput = $(`<input type='text' name='app-title-edit' value='${job}'>`);
    var company = companyInput.textContent;
    var companyTitleInput = $(`<input type='text' name='company-title-edit' value='${company}'>`);
    var link = companyURL.getAttribute('href');
    var app_link = $(`<input type='text' name='post-url-edit' value='${link}'>`);
    var dateInput = $(`<input type="text" name="date-edit" value="${dateApplied.textContent}" class="datepicker">`);
    var descriptionInput = $(`<textarea name="description-edit">${descriptionEdit.textContent}</textarea>`);
    var statusDropdown = $(`<select name="status-edit" value=${statusEdit.textContent}>
    <option value="Ready to Apply">Ready to Apply</option>
    <option value="Submitted">Submitted</option>
    <option value="Pending">Pending</option>
    <option value="Accepted">Accepted</option>
    <option value="Declined">Declined</option>
</select>`)
    var notifs = $(`<label>Recieve Notifications</label>
    <input type="checkbox" name="notify-me-edit" value="Notify">`)
    editBtn.removeAttribute('.edit-btn');
    editBtn.setAttribute('class', 'save-btn-edit');
    editBtn.textContent = "Save";
    document.querySelector('.save-btn-edit').addEventListener('click', editFormHandler);
    $(jobLabel).replaceWith(jobTitleInput);
    $(companyInput).replaceWith(companyTitleInput);
    $(companyURL).replaceWith(app_link);
    $(dateApplied).replaceWith(dateInput);
    $(descriptionEdit).replaceWith(descriptionInput);
    $(statusEdit).replaceWith(statusDropdown)
    $(notifyEdit).replaceWith(notifs);
});
});

