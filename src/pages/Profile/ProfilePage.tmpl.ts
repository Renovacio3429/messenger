// language=hbs
export default `
    <div class="profile-block">
        <div class="profile-block__sidebar">
            {{{sidebarButton}}}
        </div>
        <main>
            <div class="profile-block__main">
                {{{avatar}}}
                <div class="profile-block__main__data">
                    {{{content}}}
                    {{{linkBox}}}
                </div>
            </div>
        </main>
        {{{modal}}}
    </div>
    `
