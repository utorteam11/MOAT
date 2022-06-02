async function propertyFormHandler(event) {
    event.preventDefault();

    const nickname = document.querySelector('#property-nickname').value.trim();
    const address = document.querySelector('#property-address').value.trim();
    
    if (nickname && address) {
        const response = await fetch('/api/properties', {
            method: 'POST',
            body: JSON.stringify({
                nickname,
                address
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.ok) {
            document.location.replace('/dashboard/properties')
        } else {
            alert(response.statusText)
        }
    }
}


document.querySelector('.signup').addEventListener('submit', propertyFormHandler);