var EnCrypt = document.getElementById('btn-encrypt');
var DeCrypt = document.getElementById('btn-decrypt');
var InputText = document.getElementById("input");
var InputKey = document.getElementById("input-key");
var OutputText = document.getElementById("output");
var Lang = document.getElementById("lang");
var Language = String(Lang.value);
var alphabetEng = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
var alphabetRus = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
var alphabet = alphabetRus;
var toEncrypt = "";

function StringUnspace(StringRemoved) {
  StringRemoved = StringRemoved.replace(/\s+/g, '');
  return StringRemoved;
}

function encrypt(word,keyword) {
  var OutputText = '';
  for (var i = 0;i < word.length;i++) {
      OutputText += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
  }
  return OutputText;
}

function decrypt(word,keyword) {
  var OutputText = '';
  for (var i = 0;i < word.length;i++) {
    OutputText += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
  }
  return OutputText;
}

Lang.addEventListener('change', function() {
  var Language = String(this.value);
  if (Language == "Rus")
    alphabet = alphabetRus;
  else
    alphabet = alphabetEng;
});

EnCrypt.addEventListener('click', function() {
  toEncrypt = StringUnspace(InputText.value);
  Key = InputKey.value;
  OutputText.value = (encrypt(toEncrypt, Key).toLowerCase());
});

DeCrypt.addEventListener('click', function() {
  toEncrypt = StringUnspace(InputText.value);
  Key = InputKey.value;
  OutputText.value = (decrypt(toEncrypt, Key).toLowerCase());
});

