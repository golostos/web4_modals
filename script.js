const showBtn = document.getElementById('show-modal')
const modal = document.querySelector('.modal')
const originModalClass = modal.className

showBtn.onclick = function () {
    modal.classList.add('modal__show')
    // modal.classList.add('modal__enter')
    // setTimeout(() => {
    //     modal.classList.add('modal__enter-active')
    // }, 20)
}

window.addEventListener('click', (event) => {
    if (event.target.closest('.modal')
        || event.target.closest('#show-modal')) return;
    if (modal) {
        // modal.classList.remove('modal__enter')
        // modal.classList.remove('modal__enter-active')
        modal.classList.add('modal__leave')
        // modal.classList.add('modal__leave-active')
        const modalCloseHandler = () => {
            modal.className = originModalClass
            // modal.removeEventListener('transitionend', modalCloseHandler)
            modal.removeEventListener('animationend', modalCloseHandler)
        }
        // modal.addEventListener('transitionend', modalCloseHandler)
        modal.addEventListener('animationend', modalCloseHandler)
    }
})