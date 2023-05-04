import { createParty } from "../modules/create";

const input = document.querySelector('input');
const letters = Array.from(document.querySelectorAll('[data-letters]'));
const specs = Array.from(document.querySelectorAll('[data-spec]'));
const textExample = document.querySelector('#textExample');
const symbolsPerMinute = document.querySelector('#symbolsPerMinute');
const errorPercent = document.querySelector('#errorPercent');
const party = createParty(localStorage.getItem('text'));

export { input, letters, specs, textExample, symbolsPerMinute, errorPercent, party }