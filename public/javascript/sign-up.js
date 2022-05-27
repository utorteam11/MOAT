async function signUpFormHandler(event) {

    event.preventDefault();

    const first_name = document.querySelector("input[id='first-name'").value.trim();
    const last_name = document.querySelector("input[id='second-name'").value.trim();
    const email = document.querySelector("input[id='email-login'").value.trim();
    const password = document.querySelector("input[id='password-login'").value.trim();
    const type = document.querySelector('input[name="resident-type"]:checked').value;

    if(first_name && last_name && email && password && type) {
        switch(type) {
            case 'tenant':
                console.log('tenant');
                break;
            case 'landlord':
                const response = await fetch('/api/landlords', {
                    method: 'POST',
                    body: JSON.stringify({
                        first_name,
                        last_name,
                        email,
                        password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if(response.ok) {
                    document.location.replace('/properties')
                } else {
                    alert(response.statusText);
                }

                break;
        }
    }
}


document.querySelector('.signup').addEventListener('submit', signUpFormHandler);