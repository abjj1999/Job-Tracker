async function editFormHandler(event) {
  event.preventDefault();

  const app_title = document.querySelector('input[name="app-title"]').value;
  const company_title = document.querySelector('input[name="company-title"]').value;
  const company_url = document.querySelector('input[name="post-url"]').value;
  const description = document.querySelector('input[name="description"]').value;
  const date = document.querySelector('input[name="date"]').value;
  const status = document.querySelector('input[name="status"]').value;


  const id = this.parentNode.parentNode.parentNode.firstElementChild.getAttribute('id');
  
  const response = await fetch(`/api/appications/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      app_title,
      company_title,
      company_url,
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

document.querySelector('.edit-app-form').addEventListener('submit', editFormHandler);
