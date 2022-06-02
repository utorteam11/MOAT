async function issueFormHandler(event) {
    event.preventDefault();

    const issue_title = document.querySelector('#issue-title').value.trim();
    const issue_text = document.querySelector('#issue-text') .value.trim();
    const unit_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    if(issue_title && issue_text && unit_id) {
        const response = await fetch('/api/issues', {
            method: 'POST',
            body: JSON.stringify({
                issue_title,
                issue_text,
                unit_id,
                // status: "Open"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.ok) {
            document.location.replace(`/dashboard/units/${unit_id}`)
        } else {
            alert(response.statusText)
        }
    }
}


document.querySelector('.btn').addEventListener('click', issueFormHandler);