async function loginFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const type = document.querySelector('input[name="resident-type"]:checked').value;

    if(email && password && type) {
        switch(type) {
            case "tenant":
                const result = await fetch('/api/tenants/login', {
                    method: 'post',
                    body: JSON.stringify({
                        email,
                        password
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })
        
                if(result.ok) {
                    document.location.replace('/');
                } else {
                    alert(result.statusText);
                }
                break;
            case "landlord":
                const response = await fetch('/api/landlords/login', {
                    method: 'post',
                    body: JSON.stringify({
                        email,
                        password
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })
        
                if(response.ok) {
                    document.location.replace('/');
                } else {
                    alert(response.statusText);
                }

                break;
        }

    }
}


document.querySelector('.signup').addEventListener('submit', loginFormHandler);