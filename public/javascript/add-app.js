async function newFormHandler(event) {
  event.preventDefault();

  const jobTitle = document.querySelector('input[name="app-title"]').value;
  const companyName = document.querySelector('input[name="company-title"]').value;
  const companyURL = document.querySelector('input[name="post-url"]').value;
  const description = document.querySelector('textarea[name="description"]').value;
  const date = document.querySelector('input[name="date"]').value;
  const statusArr = document.querySelector('select[name="status"]').options;
  const status = statusArr[statusArr.selectedIndex].text;
  const notify_me = document.querySelector('input[name="notify-me"]').checked;
  
  if(jobTitle && companyName && companyURL && date) {
    const response = await fetch(`/api/applications`, {
      method: 'POST',
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

  } else {
    window.alert("Please fill out all fields.");
  }
  
}

document.querySelector('#appSaveBtn').addEventListener('click', newFormHandler);
