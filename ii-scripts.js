const body = document.querySelector('body')
const modal_button = document.querySelector('.modal-button')
const modal_overlay = document.querySelector('.ii-modal-overlay')
const modal_content = document.querySelector('.modal-content')
const modal_exit = document.querySelector('.modal-exit')

const showModal = () => {
    modal_overlay.classList.add('ii-modal-show')
    //body.style.overflow = "hidden"
    
    setTimeout(function(){
        modal_content.classList.add('ii-grow')
    }, 50)
}

const hideModal = () => {
    modal_overlay.classList.remove('ii-modal-show')
    body.style.overflow = "auto"
    
    modal_content.classList.remove('ii-grow')
}

modal_button.addEventListener('click', showModal)

modal_exit.addEventListener('click', hideModal)

modal_overlay.addEventListener('click', (e) => {
    if(e.target.classList.contains('ii-modal-overlay')){
        hideModal()
    }
    
})