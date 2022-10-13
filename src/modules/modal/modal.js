export function toggleModalInit(modalButton, modal) {
    modalButton.onclick = function() {
        modal.style.display = 'flex';
    }

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}