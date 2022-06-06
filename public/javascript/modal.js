export function modalAlert(text) {
    modalContent.textContent = text;
    modal.style.display = 'block';
};

function closeModal() {
    modal.style.display = 'none'
};

const modal = document.querySelector('#myModal');
const modalContent = document.querySelector('.modal-text')
document.querySelector('.close', addEventListener('click', closeModal));