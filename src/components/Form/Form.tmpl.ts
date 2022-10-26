// language=hbs
export default `
    <form {{{cssClasses}}} action="{{action}}">
        {{#inputs}}
            {{{this}}}
        {{/inputs}}
        {{{button}}}
    </form>
`