// Функция createParty возвращает нам объект, с помощью которого мы сможем отслеживать состояние текста,
// разбивает текст на строки, которые будут отображаться на экране,
// и устанавливает счётчики ошибок, времени и символов. 

function createParty(text) {
    const party = {
        text,
        strings: [],
        maxStringLength: 70,
        maxShowStrings: 3,
        currentStringIndex: 0,
        currentPressedIndex: 0,
        errors: [],
        started: false,

        statisticFlag: false,
        timerCounter: 0,
        startTimer: 0,
        errorCounter: 0,
        commonCounter: 0
    };
    // текст разбиваем на слова
    party.text = party.text.replace(/\n/g, '\n ');
    const words = party.text.split(' ');
    // из слов делаем строки и пушим их в массив party.strings
    let string = [];
    for (const word of words) {
        const newStringLength = [...string, word].join(' ').length + !word.includes('\n');

        if (newStringLength > party.maxStringLength) {
            party.strings.push(string.join(' ') + ' ');
            string = [];
        }

        string.push(word);

        if (word.includes('\n')) {
            party.strings.push(string.join(' '));
            string = [];
        }
    }

    if (string.length) {
        party.strings.push(string.join(' '));
    }

    return party;
}

export { createParty };