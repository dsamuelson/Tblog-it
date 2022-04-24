// setup the async function so the app doesn't stall while waiting for the response
// this one creates a new user using fetch along the appropriate route with the required data

async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: {
             'Content-Type': 'application/json' 
            }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }

    
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);