import { input } from "../constants/consts";


function init() {
    input.addEventListener('keydown', keydownHandler);
    input.addEventListener('keyup', keyupHandler);

    viewUpdate();
}

export { init };