async function commentFormHandler(event) {
    event.preventDefault();

    const content = document.querySelector('#comment-body').value.trim();

    const blog_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (content) {
        const response = await fetch('/comments', {
            method: 'POST',
            body: JSON.stringify({
                blog_id,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);