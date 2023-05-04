export default function init() {
    input.addEventListener('keydown', keydownHandler);
    input.addEventListener('keyup', keyupHandler);

    view();
}

