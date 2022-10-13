import Handlebars from 'handlebars';
import signinData from '../template-data/singin-data.json';
import inputTemplate from './templates/index-input.tmpl';
import titleTemplate from "./templates/title.tmpl";
import indexData from "../template-data/index-data.json";

window.addEventListener('DOMContentLoaded', () => {
    const titleCompiled = Handlebars.compile(titleTemplate);
    title.innerHTML = titleCompiled(indexData.pageData);

    const inputCompiled = Handlebars.compile(inputTemplate);
    app.innerHTML = inputCompiled(signinData);
});