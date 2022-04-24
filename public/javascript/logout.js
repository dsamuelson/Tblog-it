// setup the async function so the app doesn't stall while waiting for the response
// this one logs out a user using fetch along the appropriate route with the required data

async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
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
  
  document.querySelector('#logout').addEventListener('click', logout);