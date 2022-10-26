// language=hbs
export default `
    {{~#if classes~}}  
        class="
        {{~#classes}}{{~this}} {{/classes~}}
        "
    {{~/if~}}
`