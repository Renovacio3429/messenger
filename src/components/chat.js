import {toggleModalInit} from '../modules/modal/modal';
import {hideDropdown} from "../modules/dropdown/dropdown";
import {toggleDisplay} from "../modules/toggle/toggle";

window.addEventListener('DOMContentLoaded', () => {
	let addUserModal = document.getElementsByClassName('add-user-modal')[0];
	let addUserModalButton = document.getElementsByClassName('add-user-link')[0];

	let removeUserModal = document.getElementsByClassName('remove-user-modal')[0];
	let removerUserModalButton = document.getElementsByClassName('remove-user-link')[0];

	toggleModalInit(addUserModalButton, addUserModal);
	toggleModalInit(removerUserModalButton, removeUserModal);

	let headerDropDownButton = document.getElementsByClassName('chat-dialog-header-actions-button')[0];
	let footerDropDownButton = document.getElementsByClassName('chat-dialog-attach-button')[0];

	let headerDropdown = document.getElementsByClassName('dropdown-content-up')[0];
	let footerDropdown = document.getElementsByClassName('dropdown-content')[0];

	headerDropDownButton.addEventListener('click', function () {
		headerDropdown.classList.toggle('dropdown-show');

	});

	footerDropDownButton.addEventListener('click', function () {
		footerDropdown.classList.toggle('dropdown-show');
	});

	initHideDropdown(headerDropDownButton, headerDropdown, 'dropdown-show');
	initHideDropdown(footerDropDownButton, footerDropdown, 'dropdown-show');

	function initHideDropdown(dropdownButton, dropdownWindow, dropDownToken) {
		window.addEventListener('click', function(event) {
			if (event.target !== dropdownButton) {
				hideDropdown(dropdownWindow, dropDownToken);
			}
		});
	}

	let tempToggleButton = document.getElementsByClassName('chat-sidebar-contact-window')[0];

	tempToggleButton.addEventListener("click", function () {
		let emptyChatDialog = document.getElementsByClassName('chat-block__empty-chat-dialog')[0];
		let chatDialog = document.getElementsByClassName('chat-block__chat-dialog')[0];

		toggleDisplay(emptyChatDialog, 'flex');
		toggleDisplay(chatDialog, 'flex');
	});
});