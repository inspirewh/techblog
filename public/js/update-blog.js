async function editFormHandler(event) {
    event.preventDefault();

    const blogId = document.getElementById('edit-btn').getAttribute('data-id')


    const title = document.querySelector('#title').value.trim() 
    const content = document.querySelector('#body').value.trim()

    const response = await fetch(`/update/${blogId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
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

document.querySelector('#edit-blog-form').addEventListener('submit', editFormHandler);