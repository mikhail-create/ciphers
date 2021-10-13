var EnCrypt = document.getElementById('btn-encrypt');
var DeCrypt = document.getElementById('btn-decrypt');
var InputText = document.getElementById("input");
var InputKey = document.getElementById("input-key");
var OutputText = document.getElementById("output");
var toEncrypt = "";

function encrypt(word,keyword) {
  let OutputText = '';
    while (keyword.length < word.length) {
      keyword += keyword;
    }
    for(let i=0; i<word.length; i++) {
        let value1 = word[i].charCodeAt(0);
        let value2 = keyword[i].charCodeAt(0);
        let xorValue = value1 ^ value2;
        let xorValueAsHexString = xorValue.toString("16");
        if (xorValueAsHexString.length < 2) {
            xorValueAsHexString = "0" + xorValueAsHexString;
        }
        OutputText += xorValueAsHexString;
    }
    return OutputText;
}

function decrypt(word,keyword) {
let OutputText = '';
  while (keyword.length < word.length/2) {
    keyword += keyword;
  }
  for (let i=0; i<word.length; i+=2) {
    let hexValueString = word.substring(i, i+2);
    let value1 = parseInt(hexValueString, 16);
    let value2 = keyword.charCodeAt(i/2);
    let xorValue = value1 ^ value2;
    normalChar = String.fromCharCode(xorValue);
    OutputText += normalChar;
}
return OutputText;
}

EnCrypt.addEventListener('click', function() {
  toEncrypt = InputText.value;
  Key = InputKey.value;
  OutputText.value = (encrypt(toEncrypt, Key));
});

DeCrypt.addEventListener('click', function() {
  toEncrypt = InputText.value;
  Key = InputKey.value;
  OutputText.value = (decrypt(toEncrypt, Key));
});

