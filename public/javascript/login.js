async function loginFormHandler(event) {
    event.preventDefault();

    document.location.replace('/dashboard/properties')
}


document.querySelector('.signup').addEventListener('submit', loginFormHandler);