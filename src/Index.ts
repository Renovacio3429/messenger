import {routers} from "./Router";
import Block from "./core/Block";

document.addEventListener('DOMContentLoaded', () => {
   const app: HTMLElement | null = document.getElementById('app');
   const page: Block<any> | undefined = routers[window.location.pathname] || routers["/pageNotFound"];

   if (page)
       app?.append(<Node>page.getContent());
});