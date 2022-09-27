async function signupHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username-signup').value.trim() 
    const password = document.querySelector('#password-signup').value.trim()

    if(username && password) {
        const res = await fetch('/user', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers:{'Content-Type': 'application/json'}
        });

        if (res.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Error: Failed to signup')
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupHandler);