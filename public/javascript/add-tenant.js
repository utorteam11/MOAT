async function tenantUnitSelectHandler (event) {
    // get unit id from button selected and convert to number
    const unit_id = event.target.getAttribute('id');
    const { first_name, last_name, email, password } = JSON.parse(localStorage.getItem('tenant-details'));
    
    const response = await fetch('/api/tenants', {
        method: 'POST',
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            unit_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        alert('You have successfully registered as a tenant!');
        window.localStorage.clear();
        document.location.replace('/');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.unit-btn').addEventListener('click', tenantUnitSelectHandler);