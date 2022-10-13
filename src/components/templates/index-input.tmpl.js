// language=hbs
export default `
    {{#each fields}}
        <fieldset class="fieldset app__fieldset">
            <input class="input app__fieldset__input" id="{{field}}" name="{{field}}" type="{{type}}" placeholder=" ">
            <label for="{{field}}" class="label app__fieldset__label">{{fieldTitle}}</label>
            <label for="{{field}}" class="app__fieldset__error_label">{{fieldErrorTitle}}</label>
        </fieldset>
    {{/each}}`