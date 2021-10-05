async function newFormHandler(event) {
  event.preventDefault();

  const app_title = document.querySelector('input[name="app-title"]').value;
  const company_title = document.querySelector('input[name="company-title"]').value;
  const company_url = document.querySelector('input[name="post-url"]').value;
  const description = document.querySelector('input[name="description"]').value;
  const date = document.querySelector('input[name="date"]').value;

  const response = await fetch(`/api/applications`, {
    method: 'POST',
    body: JSON.stringify({
      app_title,
      company_title,
      company_url,
      description,
      date,
      notify_me
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-app-form').addEventListener('submit', newFormHandler);
