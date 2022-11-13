// language=hbs
export default `
    <input {{{cssClasses}}} id="{{fieldName}}" name="{{fieldName}}" type="{{type}}" 
            placeholder="{{#if placeholder}}{{placeholder}}{{else}} {{/if}}" 
                            {{#if disabled}}
                            disabled="disabled"{{/if}}>
`
