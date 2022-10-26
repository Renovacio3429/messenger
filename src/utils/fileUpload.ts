const fileUploadElements: HTMLCollection = document.getElementsByClassName('link-file-input');

Array.from(fileUploadElements).forEach(f => f.addEventListener('click', fileInput));

function fileInput(): void {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    input.click();
}