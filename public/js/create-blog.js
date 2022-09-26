async function newBlogHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('#blog-title').value.trim() 
    const content = document.querySelector('#blog-content').value.trim()

    if(title && body) {
        const res = await fetch('/blog/', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content
            }),
            headers:{'Content-Type': 'application/json'}
        });

        if (res.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Error: Failed to create blog post')
        }
    }
}

document.querySelector('#create-blog-form').addEventListener('submit', newBlogHandler);