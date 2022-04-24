// setup the async function so the app doesn't stall while waiting for the response
// this one deletes a post using fetch along the appropriate route with the required data

async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length -1];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('submit', deleteFormHandler);