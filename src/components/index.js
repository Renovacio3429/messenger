import Handlebars from 'handlebars';
import indexData from '../template-data/index-data.json';
import inputTemplate from './templates/index-input.tmpl';
import titleTemplate from "./templates/title.tmpl";

window.addEventListener('DOMContentLoaded', () => {
    const titleCompiled = Handlebars.compile(titleTemplate);
    title.innerHTML = titleCompiled(indexData.pageData);

    const indexCompiled = Handlebars.compile(inputTemplate);
    app.innerHTML = indexCompiled(indexData);
});
