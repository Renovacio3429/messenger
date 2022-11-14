// language=hbs
export default `
    <div class="message-wrap {{#if isMine}}message-query{{else}}message-answer{{/if}}">
        {{message}}
    </div>
`





