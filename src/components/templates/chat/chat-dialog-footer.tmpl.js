// language=hbs
export default `
    <div class="dropdown chat-block__chat-dialog__footer__dropdown">
        <button class="chat-dialog-attach-button button"></button>
        <div class="dropdown-content">
            <a href="#" class="link-black dropdown-link">
                <i class="media-icon"></i>
                <div>Фото&nbsp;или&nbsp;видео</div>
            </a>
            <a href="#" class="link-black dropdown-link">
                <i class="file-icon"></i>
                <div>Файл</div>
            </a>
            <a href="#" class="link-black dropdown-link">
                <i class="location-icon"></i>
            <div>Локация</div>
            </a>
        </div>
    </div>
    {{> form}}
    `