$(document).ready(function () {
  const openModal = $('.open-modal')
  if (openModal) {
    const modal = document.querySelector('.container-modal')
    const body = document.querySelector('body')

    openModal.on('click', function (e) {
      e.preventDefault()

      modal.classList.toggle('show')
      body.classList.toggle('open-modal')
    })

    $('.button-close').on('click', function (e) {
      e.preventDefault()
      console.log('veces que entra')
      modal.classList.toggle('show')
      body.classList.toggle('open-modal')
    })
  }
})
