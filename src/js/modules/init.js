import { input } from "../constants/consts";
import { keydownHandler, keyupHandler } from "./keyboard";
import { viewUpdate } from "./view";

function init() {
    input.addEventListener('keydown', keydownHandler);
    input.addEventListener('keyup', keyupHandler);

    viewUpdate();
}

export { init };