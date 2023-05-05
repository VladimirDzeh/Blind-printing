//Инициализируются обработчики событий нажатия и отпускания клавиш, которые вызывают функции
// keydownHandler и keyupHandler соответственно. 


import { input } from "../constants/consts";
import { keydownHandler, keyupHandler } from "./keyboard";
import { viewUpdate } from "./view";

function init() {
    input.addEventListener('keydown', keydownHandler);
    input.addEventListener('keyup', keyupHandler);

    viewUpdate();
}

export { init };