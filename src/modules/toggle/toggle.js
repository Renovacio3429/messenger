export function toggleDisabled(element) {
    if (element.getAttribute('disabled') === null) {
        element.setAttribute('disabled', 'disabled');
    } else {
        element.removeAttribute('disabled');
    }
}

export function toggleDisplay(element, display) {
    let changeDisplay = (display != undefined) ? display : 'block';
    let currentDisplay = window.getComputedStyle(element).display;
    element.style.display = (currentDisplay !== changeDisplay) ? changeDisplay : 'none';
}