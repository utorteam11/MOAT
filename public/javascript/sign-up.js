async function signUpFormHandler(event) {

    event.preventDefault();

    const firstName = document.querySelector("input[id='first-name'").value.trim();
    const secondName = document.querySelector("input[id='second-name'").value.trim();
    const email = document.querySelector("input[id='email-login'").value.trim();
    const password = document.querySelector("input[id='password-login'").value.trim();
    const type = document.querySelector('input[name="resident-type"]:checked').value;

    if(firstName && secondName && email && password && type) {
        switch(type) {
            case 'tenant':
                console.log('tenant');
                break;
            case 'landlord':
                console.log('landlord');
                break;
        }
    }
}


document.querySelector('.signup').addEventListener('submit', signUpFormHandler);