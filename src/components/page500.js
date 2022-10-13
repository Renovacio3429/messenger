import Handlebars from 'handlebars';
import errorData from '../template-data/error-data.json';
import errorTemplate from './templates/error-page.tmpl';
import titleTemplate from './templates/title.tmpl';

window.addEventListener('DOMContentLoaded', () => {
    const titleCompiled = Handlebars.compile(titleTemplate);
    title.innerHTML = titleCompiled(errorData.errorPageData.page500);

    const errorCompiled = Handlebars.compile(errorTemplate);
    app.innerHTML = errorCompiled(errorData.errorPageData.page500.data);
});