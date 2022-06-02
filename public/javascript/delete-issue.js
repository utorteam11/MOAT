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
            alert(response.statusText)
        }
    }
}

// add event listener to every resolve button displayed
btns = document.getElementsByClassName("resolve");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", issueDeleteHandler);
};