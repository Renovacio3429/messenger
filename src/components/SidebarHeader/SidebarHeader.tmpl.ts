// language=hbs
export default `
    <div class="chat-sidebar-header">
        <div class="chat-sidebar-header__profile-link">
            <a href="/settings" class="link chat-sidebar-header__link">
                <div class="header-link-title">Профиль</div>
                <i class="gray-right-arrow-icon"></i>
            </a>
        </div>
        <div class="chat-sidebar-header__action-bar">
            {{{addChatlink}}}
            {{{removeChatlink}}}
        </div>
        <input type="text" class="input chat-input sidebar-input" placeholder="Поиск" name="search">
    </div>
`;
