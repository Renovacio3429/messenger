// language=hbs
export default `
    <div class="chat-block">
        <div class="chat-block__sidebar">
            {{{sidebarHeader}}}
            <div class="chat-block__sidebar__contacts-block">
                {{{chatList}}}
            </div>
        </div>
        {{{messenger}}}
        {{{addChatModal}}}
        {{{addUserChatModal}}}
        {{{removeUserChatModal}}}
    </div>
    `