async function issueDeleteHandler(event) {
    const issue_id = event.target.getAttribute('id');
    console.log(issue_id)
    if(issue_id) {
        const response = await fetch(`/api/issues/${issue_id}`, {
            method: 'DELETE'
        })

        if(response.ok) {
            alert('Issue Resolved!');
            location.reload();
        } else {
            alert('Error')
        }
    }
}

document.querySelector('.resolve').addEventListener('click', issueDeleteHandler);