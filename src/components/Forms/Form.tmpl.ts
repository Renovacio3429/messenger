// language=hbs
export default `
    <form {{{cssClasses}}} action="#">
        {{#inputs}}
            {{{this}}}
        {{/inputs}}
            
        {{{userIdInput}}}
        {{{chatNameInput}}}
        {{{userLogin}}}
        {{{button}}}
    </form>
`;
