async function deleteHandler(event) {
    event.preventDefault();

    const blogId = document.getElementById('delete-btn').getAttribute('data-id')

    const response = await fetch(`/delete/${blogId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#delete-btn').addEventListener('click', deleteHandler);