// language=hbs
export default `
    {{#if selectedChat}}
        <div class="chat-block__chat-dialog">
            {{{dialogHeader}}}
            <main>
                <div class="chat-block__chat-dialog-content">
                    {{#messages}}
                        {{{this}}}
                    {{/messages}}
                </div>
            </main>
            {{{dialogFooter}}}
        </div>
    {{else}}
        <div class="chat-block__empty-chat-dialog">
            Выберите чат для отправки сообщений
        </div>
    {{/if}}
`