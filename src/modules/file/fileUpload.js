let fileUploadElements = document.getElementsByClassName('link-file-input');

for (let fileUploadElement of fileUploadElements) {
    fileUploadElement.addEventListener('click', fileInput)
}

function fileInput() {
    let input = document.createElement('input');
    input.type = 'file';
    input.click();
}