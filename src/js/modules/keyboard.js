import { letters, party, specs } from "../constants/consts";
import { viewUpdate } from "./view";

// Функция keydownHandler обрабатывает нажатие клавиш, проверяет, является ли нажатая клавиша
// буквой или символом, и соответствующим образом обновляет статистику ввода, вызывая функцию press.

function keydownHandler(event) {
    event.preventDefault();

    const letter = letters.find((x) => x.dataset.letters.includes(event.key));

    if (letter) {
        letter.classList.add('pressed');
        press(event.key);
        return;
    }

    let key = event.key.toLowerCase();

    if (key === ' ') {
        key = 'space';
        press(' ');
    }

    if (key === 'enter') {
        press('\n');
    }

    const ownSpecs = specs.filter((x) => x.dataset.spec === key);

    if (ownSpecs.length) {
        ownSpecs.forEach((spec) => spec.classList.add('pressed'));
        return;
    }

    alert(`Неизвестный вид клавиши!`, event);

}

// Функция keyupHandler обрабатывает отпускание клавиш и удаляет класс 'pressed',
// который был добавлен функцией keydownHandler. 


function keyupHandler(event) {
    event.preventDefault();

    const letter = letters.find((x) => x.dataset.letters.includes(event.key));

    if (letter) {
        letter.classList.remove('pressed');
        return;
    }

    let key = event.key.toLowerCase();

    if (key === ' ') {
        key = 'space';
    }

    const ownSpecs = specs.filter((x) => x.dataset.spec === key);

    if (ownSpecs.length) {
        ownSpecs.forEach((spec) => spec.classList.remove('pressed'));
        return;
    }
}

// Функция press отслеживает нажатия клавиш и обновляет статистику ввода в соответствии с нажатой клавишей. 

function press(letter) {
    party.started = true;

    if (!party.statisticFlag) {
        party.statisticFlag = true;
        party.startTimer = Date.now();
    }
    const string = party.strings[party.currentStringIndex];
    const mustLetter = string[party.currentPressedIndex];

    if (letter === mustLetter) {
        party.currentPressedIndex++;

        if (string.length <= party.currentPressedIndex) {
            party.currentPressedIndex = 0;
            party.currentStringIndex++;

            party.statisticFlag = false;
            party.timerCounter = Date.now() - party.startTimer;
        }
    } else if (!party.errors.includes(mustLetter)) {
        party.errors.push(mustLetter);
        party.errorCounter++;
    }

    party.commonCounter++;

    viewUpdate();
}


export { keydownHandler, keyupHandler, press };