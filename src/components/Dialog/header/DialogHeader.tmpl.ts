// language=hbs
export default `
    <div class="chat-dialog-header">
        <div class="selected-contact-info-container">
            <span class="chat-header-avatar"></span>
            <div class="contact-info-container">{{name}}</div>
        </div>
        <div class="dropdown">
            {{{button}}}
            {{{dropdownHeader}}}
        </div>
    </div>
`
