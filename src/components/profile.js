import Handlebars from 'handlebars';
import {toggleModalInit} from '../modules/modal/modal';
import {toggleDisabled, toggleDisplay} from "../modules/toggle/toggle";
import profileData from '../template-data/profile-data.json';
import profileChangePwdData from '../template-data/profile-pwd-data.json';
import template from './templates/profile-input.tmpl';
import titleTemplate from "./templates/title.tmpl";

window.addEventListener('DOMContentLoaded', () => {
    const titleCompiled = Handlebars.compile(titleTemplate);
    title.innerHTML = titleCompiled(profileData.pageData);

    const compiled = Handlebars.compile(template);
    profile.innerHTML = compiled(profileData);
    profileChangePwd.innerHTML = compiled(profileChangePwdData);

    let modal = document.getElementsByClassName('avatar-modal')[0];
    let modalButton = document.getElementsByClassName('avatar-button')[0];

    toggleModalInit(modalButton, modal);

    let profileDataBox = document.getElementsByClassName('profile-change-data-link')[0];
    let viewButton = document.getElementsByClassName('profile-data-submit')[0];

    viewButton.addEventListener('click', toggleProfileDataChangeDataForm);
    profileDataBox.addEventListener('click', toggleProfileDataChangeDataForm);

    let profileInputs = document.getElementsByClassName('profile-input');
    let actionBox = document.getElementsByClassName('profile-actions-box')[0];
    let profileSubmitButton = document.getElementsByClassName('profile-data-submit')[0];

    function toggleProfileDataChangeDataForm() {
        Array.from(profileInputs).forEach((el) => toggleDisabled(el));
        toggleDisplay(actionBox);
        toggleDisplay(profileSubmitButton);
    }

    let submitChangePwdForm = document.getElementsByClassName('profile-change-pwd-submit')[0];
    let changePwdFormHref = document.getElementsByClassName('change-pwd-link')[0];

    changePwdFormHref.addEventListener('click', toggleProfileDataPwdForm);
    submitChangePwdForm.addEventListener('click', toggleProfileDataPwdForm);

    function toggleProfileDataPwdForm() {
        let viewDataBox = document.getElementsByClassName('profile-block__main__data-block')[0];
        let changePasswordBox = document.getElementsByClassName('profile-block__main__pwd-block')[0];
        toggleDisplay(viewDataBox, 'flex');
        toggleDisplay(changePasswordBox, 'flex')
    }
});