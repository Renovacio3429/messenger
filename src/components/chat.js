import Handlebars from "handlebars";
import {toggleModalInit} from '../modules/modal/modal';
import {hideDropdown} from "../modules/dropdown/dropdown";
import {toggleDisplay} from "../modules/toggle/toggle";
import chatSidebarHeaderTemplate from "./templates/chat/chat-sidebar-header.tmpl";
import chatSidebarBlockTemplate from "./templates/chat/chat-sidebar-contact-block.tmpl";
import chatDialogHeaderTemplate from "./templates/chat/chat-dialog-header.tmpl";
import chatDialogFooterTemplate from "./templates/chat/chat-dialog-footer.tmpl";
import titleTemplate from "./templates/title.tmpl";
import partialsRegistr from "./templates/partials-registr"

window.addEventListener('DOMContentLoaded', () => {

	const chatSidebarHeaderCompile = Handlebars.compile(chatSidebarHeaderTemplate);
	chatSidebarHeader.innerHTML = chatSidebarHeaderCompile();

	const chatSidebarBlockCompile = Handlebars.compile(chatSidebarBlockTemplate);
	chatSidebarMain.innerHTML = chatSidebarBlockCompile();

	const chatDialogHeaderTemplateCompile = Handlebars.compile(chatDialogHeaderTemplate);
	chatDialogHeader.innerHTML = chatDialogHeaderTemplateCompile();

	const chatDialogFooterTemplateCompile = Handlebars.compile(chatDialogFooterTemplate);
	chatDialogFooter.innerHTML = chatDialogFooterTemplateCompile();

	const chatInputMessageTitleTemplateCompile = Handlebars.compile(titleTemplate);
	chatMessageInputTitle.innerHTML = chatInputMessageTitleTemplateCompile({"title": "Выберите чат чтобы отправить сообщение"});

	const addUserModal = document.getElementsByClassName('add-user-modal')[0];
	const addUserModalButton = document.getElementsByClassName('add-user-link')[0];

	const removeUserModal = document.getElementsByClassName('remove-user-modal')[0];
	const removerUserModalButton = document.getElementsByClassName('remove-user-link')[0];

	toggleModalInit(addUserModalButton, addUserModal);
	toggleModalInit(removerUserModalButton, removeUserModal);

	const headerDropDownButton = document.getElementsByClassName('chat-dialog-header-actions-button')[0];
	const footerDropDownButton = document.getElementsByClassName('chat-dialog-attach-button')[0];

	const headerDropdown = document.getElementsByClassName('dropdown-content-up')[0];
	const footerDropdown = document.getElementsByClassName('dropdown-content')[0];

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

	const tempToggleButton = document.getElementsByClassName('chat-sidebar-contact-window')[0];

	tempToggleButton.addEventListener("click", function () {
		const emptyChatDialog = document.getElementsByClassName('chat-block__empty-chat-dialog')[0];
		const chatDialog = document.getElementsByClassName('chat-block__chat-dialog')[0];

		toggleDisplay(emptyChatDialog, 'flex');
		toggleDisplay(chatDialog, 'flex');
	});
});