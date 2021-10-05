async function deleteFormHandler(event) {
  event.preventDefault();

  const id = this.parentNode.parentNode.parentNode.firstElementChild.getAttribute('id');

  const response = await fetch(`/api/applications/${id}`, {
    method: 'DELETE'
  });

  console.log('Deleted!');

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

$('.del-btn').on('click', deleteFormHandler);
