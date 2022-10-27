// language=hbs
export default `
    <div class="chat-block">
        <div class="chat-block__sidebar">
            {{{sidebarHeader}}}
            <div class="chat-block__sidebar__contacts-block">
                {{#contacts}}
                    {{{this}}}
                {{/contacts}}
            </div>
        </div>
        
        <!--<div class="chat-block__empty-chat-dialog"></div>-->
        
        <div class="chat-block__chat-dialog">
            {{{chatHeader}}}
            <main>
                <div class="chat-block__chat-dialog-content">
                    {{#messages}}
                        {{{this}}}
                    {{/messages}}
                </div>
            </main>
            {{{chatFooter}}}
        </div>
    </div>
    `