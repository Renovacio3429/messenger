// language=hbs
export default `
    <div>
        {{#if isChatsLoaded }}
            {{#each chats}}
                {{{this}}}
            {{/each}}
        {{else}}
            Загрузка...
        {{/if}}
    </div>
`;
