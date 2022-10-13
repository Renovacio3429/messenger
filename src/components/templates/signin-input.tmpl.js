// language=hbs
export default `
    {{#each fields}}
        <fieldset class="fieldset input-form-wrap">
            <input class="input form-input" name="{{field}}" id="{{field}}" type="{{type}}" placeholder=" ">
            <label for="{{field}}" class="label form-label">{{fieldTitle}}</label>
        </fieldset>
    {{/each}}`