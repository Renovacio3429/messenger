import Block from "./core/Block";
import {LoginPage} from "./pages/Login/LoginPage";
import {SignInPage} from "./pages/SignIn/SignInPage";
import {ErrorPage} from "./pages/ErrorPages/ErrorPage/ErrorPage";
import {NotFoundPage} from "./pages/ErrorPages/NotFoundPage/NotFoundPage";
import {ProfilePage} from "./pages/Profile/ProfilePage/ProfilePage";
import {ProfileChangePwdPage} from "./pages/Profile/ProfileChangePwdPage/ProfileChangePwdPage";
import {ProfileChangeDataPage} from "./pages/Profile/ProfileChangeDataPage/ProfileChangeDataPage";
import {ChatPage} from "./pages/Chat/ChatPage";
import {loginPageProps} from "./pages/Login/LoginPageProps";
import {signInPageProps} from "./pages/SignIn/SignInPageProps";
import {errorPageProps} from "./pages/ErrorPages/ErrorPage/ErrorPageProps";
import {notFoundPageProps} from "./pages/ErrorPages/NotFoundPage/NotFoundPageProps";
import {chatPageProps} from "./pages/Chat/ChatPageProps";
import {profilePageProps} from "./pages/Profile/ProfilePage/ProilePageProps";
import {profileChangeDataPageProps} from "./pages/Profile/ProfileChangeDataPage/ProfileChangeDataPageProps";
import {profileChangePwdPageProps} from "./pages/Profile/ProfileChangePwdPage/ProileChangePwdPageProps";


export const routers: Record<string, Block<any>> = {
    "/": new LoginPage(loginPageProps),
    "/signIn": new SignInPage(signInPageProps),
    "/error": new ErrorPage(errorPageProps),
    "/pageNotFound": new NotFoundPage(notFoundPageProps),
    "/profile": new ProfilePage(profilePageProps),
    "/profile/changeData": new ProfileChangeDataPage(profileChangeDataPageProps),
    "/profile/changePwd": new ProfileChangePwdPage(profileChangePwdPageProps),
    "/chat": new ChatPage(chatPageProps),
};