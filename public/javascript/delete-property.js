async function propertyDeleteHandler (event) {
    const property_id = event.target.getAttribute('id');
    const confirmDelete = confirm('Are you sure you want to delete this property?')
    
    if(property_id && confirmDelete) {
        const response = await fetch(`/api/properties/${property_id}`, {
            method: 'DELETE'
        })

        if(response.ok) {
            alert('Property successfully deleted!');
            location.replace('/dashboard/properties');
        } else {
            alert(response.statusText)
        }
    }
}

btns = document.getElementsByClassName("property-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", propertyDeleteHandler);
}