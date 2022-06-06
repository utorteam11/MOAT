import {modalAlert} from './modal.js'

async function issueDeleteHandler(event) {
    const issue_id = event.target.getAttribute('id');
    console.log(issue_id)
    if(issue_id) {
        const response = await fetch(`/api/issues/${issue_id}`, {
            method: 'DELETE'
        })

        if(response.ok) {
            modalAlert('Issue Resolved!');
            setTimeout(() => location.reload(), 2000)
        } else {
            modalAlert(response.statusText)
        }
    }
}

// add event listener to every resolve button displayed
const btns = document.getElementsByClassName("resolve");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", issueDeleteHandler);
};