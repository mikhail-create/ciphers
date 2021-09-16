var EnCrypt = document.getElementById('btn-encrypt');
var DeCrypt = document.getElementById('btn-decrypt');
var InputText = document.getElementById("input");
var InputKey = document.getElementById("input-key");
var OutputText = document.getElementById("output");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var toEncrypt = "";

function encrypt(word,keyword) {
  let OutputText = '';
  for (var i = 0 ; i < word.length ; i++) {
    OutputText += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
  }
  return OutputText;
}

function decrypt(word,keyword) {
  let OutputText = '';
  for (var i = 0;i < word.length;i++) {
    OutputText += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
  }
  return OutputText;
}

EnCrypt.addEventListener('click', function() {
  console.log("w");
  toEncrypt = InputText.value;
  Key = InputKey.value;
  OutputText.value = (encrypt(toEncrypt, Key).toLowerCase());
});

DeCrypt.addEventListener('click', function() {
  toEncrypt = InputText.value;
  Key = InputKey.value;
  OutputText.value = (decrypt(toEncrypt, Key).toLowerCase());
});

