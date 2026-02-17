document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById('modal');
  bootstrap.Modal.getOrCreateInstance(modal).handleUpdate();
  modal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const content = button.parentElement.querySelector('.card-content-extra');
    document.getElementById('modalLabel').textContent = button.parentElement.getAttribute('data-title');
    document.getElementById('modalBody').innerHTML = '';
    document.getElementById('modalBody').appendChild(content.cloneNode(true));
    const carousel = modal.querySelector('#carousel-phony')
    carousel.id = 'carousel'
    console.dir(carousel)
    if (carousel) {
      new bootstrap.Carousel(carousel)
    }


  })

});