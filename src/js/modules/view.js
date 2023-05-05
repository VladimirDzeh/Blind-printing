import { party, input, symbolsPerMinute, errorPercent, textExample } from "../constants/consts";

function viewUpdate() {
    const string = party.strings[party.currentStringIndex];

    const showedStrings = party.strings.slice(
        party.currentStringIndex,
        party.currentStringIndex + party.maxShowStrings
    );

    const div = document.createElement('div');

    const firstLine = document.createElement('div');
    firstLine.classList.add('line');
    div.append(firstLine);

    const done = document.createElement('span');
    done.classList.add('done');
    done.textContent = string.slice(0, party.currentPressedIndex);
    firstLine.append(
        done,
        ...string
            .slice(party.currentPressedIndex)
            .split('')
            .map((letter) => {
                if (letter === ' ') {
                    return '·';
                }
                if (party.errors.includes(letter)) {
                    const errorSpan = document.createElement('span');
                    errorSpan.classList.add('hint');
                    errorSpan.textContent = letter;
                    return errorSpan;
                }
                return letter;
            })
    );

    for (let i = 1; i < showedStrings.length; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        div.append(line);

        line.append(
            ...showedStrings[i].split('').map((letter) => {
                if (letter === ' ') {
                    return '·';
                }
                if (party.errors.includes(letter)) {
                    const errorSpan = document.createElement('span');
                    errorSpan.classList.add('hint');
                    errorSpan.textContent = letter;
                    return errorSpan;
                }
                return letter;
            })
        );
    }

    textExample.innerHTML = '';
    textExample.append(div);

    input.value = string.slice(0, party.currentPressedIndex);

    if (!party.statisticFlag && party.started) {
        symbolsPerMinute.textContent =
            Math.round((60000 * party.commonCounter) / party.timerCounter);
        errorPercent.textContent =
            Math.floor((10000 * party.errorCounter) / party.commonCounter) / 100 + '%';
    }
}

export { viewUpdate };
