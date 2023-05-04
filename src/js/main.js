import { init } from "./modules/init";
import { getText } from "./services/request";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    getText('https://fish-text.ru/get')
        .then(responce => localStorage.setItem('text', responce.text));

    init();
});
