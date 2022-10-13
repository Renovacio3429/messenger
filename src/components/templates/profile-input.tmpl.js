// language=hbs
export default `
    {{#each fields}}
        <fieldset class="fieldset profile-row-wrap
                {{#if border}}
                   bottom-border
                {{/if}}">
            <label for="{{field}}">{{fieldTitle}}</label>
            <input name="{{field}}" id="{{field}}" class="input profile-input text-right background-white" type="{{type}}" placeholder="{{placeholder}}"
                {{#if disabledInput}}
                   disabled="disabled"
                {{/if}}>
        </fieldset>
    {{/each}}`

