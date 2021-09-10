window.addEventListener('DOMContentLoaded', function() {
var InputText = document.getElementById("input");
var OutputText = document.getElementById("output");
var Reset = document.getElementById('btn-reset');
var Crypt = document.getElementById('btn-crypt');
var DeCrypt = document.getElementById('btn-decrypt');
var Step = document.getElementById('step');
var UserStep = Number(Step.value);
var TextToWork;

var Numbers = ['0','1','2','3','4','5','6','7','8','9'];
var RusUp = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
var RusLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
var EngUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var EngLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z'];
var RusUpEncrypt = Array(33);
var RusLowerEncrypt = Array(33);
var EngUpEncrypt = Array(26); 
var EngLowerEncrypt = Array(26);
var NumbersEncrypt = Array(10);

function initEncrypt() {
    NumbersEncrypt = CezarEncrypt(UserStep, Numbers);
    RusUpEncrypt = CezarEncrypt(UserStep, RusUp);
    RusLowerEncrypt = CezarEncrypt(UserStep, RusLower);
    EngUpEncrypt = CezarEncrypt(UserStep, EngUp);
    EngLowerEncrypt = CezarEncrypt(UserStep, EngLower);
}

function CezarEncrypt(stap, arr) {
    var CopyAlf = arr.slice();
    var i = 0;
    
    while ((i + stap) < (CopyAlf.length)) {
      var buff = CopyAlf[i];
      CopyAlf[i] = CopyAlf[i + stap];
      CopyAlf[i + stap] = buff;
      i++;     
    }
    return CopyAlf;
  }
  
initEncrypt();
function contains(symb, arr) {
    var letter = symb;
    pos = 0;
    for (var i = 0; i < arr.length; i++) {
      if (letter === arr[i]) {
        pos = i;
        return true;
      }
    }
  }

  Step.addEventListener('change', function() {
    UserStep = Number(this.value);
    initEncrypt();
  });

function encrypt(text) {
    var OutputText = '';
    for (var i = 0; i <= text.length; i++) {
      var symbol = text[i];
      if (contains(symbol, Numbers)) {
        symbol = NumbersEncrypt[pos];
        OutputText += symbol;
      }
      if (contains(symbol, RusLower)) {
        symbol = RusLowerEncrypt[pos];
        OutputText += symbol;
      }
      if (contains(symbol, RusUp)) {
        symbol = RusUpEncrypt[pos];
        OutputText += symbol;
      }
      if (contains(symbol, EngLower)) {
        symbol = EngLowerEncrypt[pos];
        OutputText += symbol;
      }
      if (contains(symbol, EngUp)) {
        symbol = EngUpEncrypt[pos];
        OutputText += symbol;
      }
    }
    return OutputText;
  }

  function decrypt(text) {
    var OutputText = '';
    for (var i = 0; i <= text.length; i++) {
      var symbol = text[i];
      if (contains(symbol, NumbersEncrypt)) {
        symbol = Numbers[pos];
        OutputText += symbol;
      }
      if (contains(symbol, RusLowerEncrypt)) {
        symbol = RusLower[pos];
        OutputText += symbol;
      }
      if (contains(symbol, RusUpEncrypt)) {
        symbol = RusUp[pos];
        OutputText += symbol;
      }
      if (contains(symbol, EngLowerEncrypt)) {
        symbol = EngLower[pos];
        OutputText += symbol;
      }
      if (contains(symbol, EngUpEncrypt)) {
        symbol = EngUp[pos];
        OutputText += symbol;
      }
    }
    return OutputText;
  }  

Reset.addEventListener('click', function() {
    InputText.value = '';
    OutputText.value = '';
  });

Crypt.addEventListener('click', function() {
    TextToWork = InputText.value;
    OutputText.value = encrypt(TextToWork);
  });

DeCrypt.addEventListener('click', function() {
    TextToWork = InputText.value;
    OutputText.value = decrypt(TextToWork);
  });




});