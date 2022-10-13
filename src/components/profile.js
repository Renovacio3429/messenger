import Handlebars from 'handlebars';
import {toggleModalInit} from '../modules/modal/modal';
import {toggleDisabled, toggleDisplay} from "../modules/toggle/toggle";
import profileData from '../template-data/profile-data.json';
import profileChangePwdData from '../template-data/profile-pwd-data.json';
import profileLinksBoxData from '../template-data/profile-links-box.json';
import template from './templates/profile/profile-input.tmpl';
import titleTemplate from "./templates/title.tmpl";
import linksBoxTemplate from "./templates/profile/profile-links-box.tmpl";
import buttonTemplate from "./templates/submit-button.tmpl";

window.addEventListener('DOMContentLoaded', () => {
    const titleCompiled = Handlebars.compile(titleTemplate);
    title.innerHTML = titleCompiled(profileData.pageData);

    const compiled = Handlebars.compile(template);
    profile.innerHTML = compiled(profileData);
    profileChangePwd.innerHTML = compiled(profileChangePwdData);

    const profileLinksBoxCompiled = Handlebars.compile(linksBoxTemplate);
    profileLinksBox.innerHTML = profileLinksBoxCompiled(profileLinksBoxData);

    const profileChangeDataSubmit = Handlebars.compile(buttonTemplate);
    profileChangeDataSubmitBlock.innerHTML = profileChangeDataSubmit(profileData.submitButtons.profileDataSubmit);

    const profileChangePwdSubmit = Handlebars.compile(buttonTemplate);
    console.log(profileChangePwdSubmit(profileData.submitButtons.profileChangePwdSubmit))
    profileChangePwdSubmitBlock.innerHTML = profileChangePwdSubmit(profileData.submitButtons.profileChangePwdSubmit);

    const modal = document.getElementsByClassName('avatar-modal')[0];
    const modalButton = document.getElementsByClassName('avatar-button')[0];

    toggleModalInit(modalButton, modal);

    const profileDataBox = document.getElementsByClassName('profile-change-data-link')[0];
    const viewButton = document.getElementsByClassName('profile-data-submit')[0];

    viewButton.addEventListener('click', toggleProfileDataChangeDataForm);
    profileDataBox.addEventListener('click', toggleProfileDataChangeDataForm);

    const profileInputs = document.getElementsByClassName('profile-input');
    const actionBox = document.getElementsByClassName('profile-actions-box')[0];
    const profileSubmitButton = document.getElementsByClassName('profile-data-submit')[0];

    function toggleProfileDataChangeDataForm() {
        Array.from(profileInputs).forEach((el) => toggleDisabled(el));
        toggleDisplay(actionBox);
        toggleDisplay(profileSubmitButton);
    }

    const submitChangePwdForm = document.getElementsByClassName('profile-change-pwd-submit')[0];
    const changePwdFormHref = document.getElementsByClassName('change-pwd-link')[0];

    changePwdFormHref.addEventListener('click', toggleProfileDataPwdForm);
    submitChangePwdForm.addEventListener('click', toggleProfileDataPwdForm);

    function toggleProfileDataPwdForm() {
        const viewDataBox = document.getElementsByClassName('profile-block__main__data-block')[0];
        const changePasswordBox = document.getElementsByClassName('profile-block__main__pwd-block')[0];
        toggleDisplay(viewDataBox, 'flex');
        toggleDisplay(changePasswordBox, 'flex')
    }
});