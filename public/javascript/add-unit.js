async function unitFormHandler(event) {
    event.preventDefault();

    const unit_number = document.querySelector('#unit-number').value.trim();
    const rent = document.querySelector('#unit-rent').value.trim();
    const rent_due = document.querySelector('#unit-rentdue').value.trim();
    const property_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    console.log(property_id);

    if (unit_number && rent && rent_due && property_id) {
        const response = await fetch('/api/units', {
            method: 'POST',
            body: JSON.stringify({
                unit_number,
                rent,
                rent_due,
                property_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.ok) {
            document.location.replace(`/dashboard/properties/${property_id}`)
        } else {
            alert(response.statusText)
        }
    }
}


document.querySelector('.signup').addEventListener('submit', unitFormHandler);