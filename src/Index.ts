import {routers} from "./Router";
import Block from "./core/Block";

document.addEventListener('DOMContentLoaded', () => {
   const app: HTMLElement | null = document.getElementById('app');

   let page: Block | undefined = routers[window.location.pathname];
   page = page ? page : routers["/pageNotFound"];

   app?.append(<Node>page.getContent());
});