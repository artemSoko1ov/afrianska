const modalOverlay = document.querySelector('#modal-overlay')
const modal = modalOverlay.querySelector('#modal')
const openModalButton = document.querySelector('#open-modal')
const closeButton = modal.querySelector('#close-modal')

function handleOverlayClick(event) {
  if (event.target === modalOverlay) {
    closeModal()
  }
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

function showModal() {
  modalOverlay.classList.add('active')
  document.documentElement.classList.toggle('is-lock')
  document.documentElement.addEventListener('keydown', handleKeyDown)
}

function closeModal() {
  modalOverlay.classList.remove('active')
  document.documentElement.classList.remove('is-lock')
  document.removeEventListener('keydown', handleKeyDown)
}

export default function modalModule() {
  openModalButton.addEventListener('click', showModal)
  modalOverlay.addEventListener('click', handleOverlayClick)
  closeButton.addEventListener('click', closeModal)
}
