const {encryptText, decryptText} = require('./encrypt');

const SALT = "07dbb6e6832da0841dd79701200e4b179f1a94a7b3dd26f612817f3c03117434";

(async () => {
    const encrypted =await encryptText(userText, userPass, SALT);
    console.log(encrypted);

    const decrypted = await decryptText(encrypted.encrypted, userPass, SALT, encrypted.iv);

    console.log(decrypted);
})();