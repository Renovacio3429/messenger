// language=hbs
export default `
    <ul {{{cssClasses}}}>
        {{#links}}
            <li class="bottom-border profile-link-padding">
                {{{this}}}
            </li>
        {{/links}}
    </ul>
    `