var InputText = document.getElementById("input");
var OutputText = document.getElementById("output");
var Reset = document.getElementById('btn-reset');
var Crypt = document.getElementById('btn-crypt');
var DeCrypt = document.getElementById('btn-decrypt');

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var a = 3;
var b = 4;
function getInvMod(a, m) {
    [a, m] = [+a, +m];
    a = (a % m + m) % m;
    if (!a || m < 2) return `входные данные не верны`;
    let [s, b] = [[], m];
    while(b) ([a, b] = [b, a % b], s.push({a, b}));
    if (a !== 1) return `'a' не обратимое, то есть не имеет обратного`;
    let [x, y] = [1, 0];
    for(let i = s.length - 2; i >= 0; --i) [x, y] = [y,  x - y * Math.floor(s[i].a / s[i].b)];
    return (y % m + m) % m;
}

function encrypt(message) {
        let encryptMessage = "";
        for (let i = 0; i < message.length; i++) {
            // encryptChar = (ax + b) mod alphabet.length
            if (message[i] == ' ') {
                encryptMessage += ' ';
            }
            else {
                encryptChar =
                (this.a * this.alphabet.indexOf(message[i].toLowerCase()) +
                    this.b) %
                this.alphabet.length;

                encryptMessage += this.alphabet[encryptChar];
            }
            
        }
        return encryptMessage;
}

function decrypt(message) {
        let decryptMessage = "";
        let aInverse = getInvMod(a, alphabet.length);
        for (let i = 0; i < message.length; i++) {
            // decryptChar = a-1 * (y + alphabet.length - b) mod alphabet.length
            if (message[i] == ' ') {
                decryptMessage += ' ';
            }
            else {
                let decryptChar =
                (aInverse *
                    (this.alphabet.indexOf(message[i]) +
                        this.alphabet.length -
                        this.b)) %
                this.alphabet.length;
                decryptMessage += this.alphabet[decryptChar];
            }
            
        }
        return decryptMessage;
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