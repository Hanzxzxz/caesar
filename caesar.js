// 👉 Задание:
// - посмотртите видюшку про шифр Цезаря https://www.youtube.com/watch?v=gF_YRW9-eLY
// - допишите функцию shift, чтобы она "смещала" по алфавиту заданный символ char на расстояние distance как описано в видео
// пока достаточно смещать только маленькие буквы русского алфавита
// ВАЖНО: остальные символы - оставлять без изменения
// хчъ лъэхёс! ;)

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

  // 👉 вот тут самое время написать ваш код, который "сдвигает" char на задданное
  // "расстояние" (distance) по алфавиту. т.е. если char == 'а' и distance == 1
  // то encrypted должен быть 'б'
  // если символа нет в алфавите - то encrypted долен быть равень этому символу,
  // без изменений

  return encrypted;
}

function caesar(text, key) {
  const allChars = text.split("");
  let result = "";
  for (var i = 0; i < allChars.length; i++) {
    result = result + shift(allChars[i], key);
  }
  return result;
}

/////////////////////////  поздравляю, это все задания в этом упражнении, дальше заданий нет  //////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
mocha.setup("bdd");
var assert = chai.assert;

describe("caesar cipher", () => {
  it("а => б если distance == 1", () => {
    assert.equal(shift("а", 1), "б");
  });
  it("я => а если distance == 1", () => {
    assert.equal(shift("я", 1), "а");
  });
  it("! => ! при любом distance", () => {
    assert.equal(shift("!", Math.floor(Math.random() * 32)), "!");
  });
  it("абв => бвг если key == 1", () => {
    assert.equal(caesar("абв", 1), "бвг");
  });
  it("вот это да! => чдз тзд щх! если key == 22", () => {
    assert.equal(caesar("вот это да!", 22), "чдз тзд щх!");
  });
});

mocha.run();