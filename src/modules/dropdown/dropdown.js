export function hideDropdown(dropdownWindow, dropdownToken) {
    if (dropdownWindow.classList.contains(dropdownToken)) {
        dropdownWindow.classList.remove(dropdownToken);
    }
}