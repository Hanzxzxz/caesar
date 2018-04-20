
function shift(char, distance) {
  const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");
  if (distance >= alphabet.length) {
    throw new Error("distance is too big, max is " + (alphabet.length - 1));
  }
  let encrypted = "";
  let shiftedAlphabet = "";
  let newChar;
  for (let i = 0; i < alphabet.length; i++) {
    newChar =
      alphabet[i + distance] === undefined
        ? alphabet[i + distance - alphabet.length]
        : alphabet[i + distance];
    shiftedAlphabet = shiftedAlphabet.concat(newChar);
  }
  let indexOfChar = alphabet.indexOf(char);
  encrypted =
    indexOfChar == -1 ? char : encrypted.concat(shiftedAlphabet[indexOfChar]);
  return encrypted;
}
export function caesar(text, key) {
  const allChars = text.split("");
  let result = "";
  for (var i = 0; i < allChars.length; i++) {
    result = result + shift(allChars[i], key);
  }
  return result;
}
