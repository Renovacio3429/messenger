import Router from "core/Router/Router";
import AuthController from "controllers/AuthController";
import { LoginPage } from "pages/Login/LoginPage";
import { ErrorPage } from "pages/ErrorPages/ErrorPage/ErrorPage";
import { NotFoundPage } from "pages/ErrorPages/NotFoundPage/NotFoundPage";
import { RoutesConfig } from "core/Router/RouterConfig";
import { SignIn } from "pages/SignUp/SignUpPage";
import { Profile } from "pages/Profile/ProfilePage/ProfilePage";
import { ProfileChangeData } from "pages/Profile/ProfileChangeDataPage/ProfileChangeDataPage";
import { ProfileChangePwd } from "pages/Profile/ProfileChangePwdPage/ProfileChangePwdPage";
import { Chat } from "pages/Chat/ChatPage";
import "styles/styles.css";

                            window.addEventListener("DOMContentLoaded", async () => {
    Router.use(RoutesConfig.Login, LoginPage)
        .use(RoutesConfig.SignUp, SignIn)
            .use(RoutesConfig.Error, ErrorPage)
        .use(RoutesConfig.NotFound, NotFoundPage)
         .use(RoutesConfig.Profile, Profile)
        .use(RoutesConfig.ChangeProfileData, ProfileChangeData)
        .use(RoutesConfig.ChangeProfilePwd, ProfileChangePwd)
        .use(RoutesConfig.Chat, Chat);

    let isProtectedRoute = true;

    switch (window.location.pathname) {
        case RoutesConfig.Login:
        case RoutesConfig.SignUp:
            isProtectedRoute = false;
            break;
    }

    try {
        await AuthController.fetchUser();
        Router.start();

        if (!isProtectedRoute) {
            Router.go(RoutesConfig.Chat);
        }
    } catch (e) {
        console.error(e);

        Router.start();
        if (isProtectedRoute) {
            Router.go(RoutesConfig.Login);
        }
    }
});
