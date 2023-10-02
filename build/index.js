"use strict";
const xtpo1 = "Teste";
const xtpo2 = 4;
const xtpo3 = true;
const xtpo4 = ["string1", "string2"];
const xtpo5 = ["string1", 2];
const xtpo6 = ["string1", 2, true];
const xtpo7 = [["string"]];
const xtpo8 = {
    teste: "teste"
};
function teste(x, y) {
    let xtpo = 'O X é ';
    xtpo = xtpo + x;
    xtpo += " e o y é ";
    xtpo += y;
    return xtpo;
}
console.log(teste("Vasco", 1));
