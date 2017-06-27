import CryptoJS from 'crypto-js';
import randomstring from 'randomstring';

function encrypt(text, name) {
  const secret = randomstring.generate();
  const chunk0 = name.concat('chunk0');
  const chunk1 = name.concat('chunk1');
  const chunk2 = name.concat('chunk2');
  const chunk3 = name.concat('chunk3');
  const chunk4 = name.concat('chunk4');
  const chunk5 = name.concat('chunk5');
  const chunk6 = name.concat('chunk6');
  const chunk7 = name.concat('chunk7');
  const chunkArr = secret.match(/.{1,4}/g);

  const encryptedText = CryptoJS.AES.encrypt(JSON.stringify(text), secret);
  if (typeof (Storage) !== 'undefined') {
    localStorage.setItem(name, encryptedText.toString());
    localStorage.setItem(chunk0, chunkArr[4]);
    localStorage.setItem(chunk1, chunkArr[7]);
    localStorage.setItem(chunk2, chunkArr[5]);
    localStorage.setItem(chunk3, chunkArr[2]);
    localStorage.setItem(chunk4, chunkArr[0]);
    localStorage.setItem(chunk5, chunkArr[6]);
    localStorage.setItem(chunk6, chunkArr[3]);
    localStorage.setItem(chunk7, chunkArr[1]);
  } else {
    console.log('No localStorage support.');
  }
}

function decrypt(name) {
  const text = localStorage.getItem(name);
  const chunk0 = localStorage.getItem(name.concat('chunk0'));
  const chunk1 = localStorage.getItem(name.concat('chunk1'));
  const chunk2 = localStorage.getItem(name.concat('chunk2'));
  const chunk3 = localStorage.getItem(name.concat('chunk3'));
  const chunk4 = localStorage.getItem(name.concat('chunk4'));
  const chunk5 = localStorage.getItem(name.concat('chunk5'));
  const chunk6 = localStorage.getItem(name.concat('chunk6'));
  const chunk7 = localStorage.getItem(name.concat('chunk7'));
  const secret = chunk4.concat(chunk7, chunk3, chunk6, chunk0, chunk2, chunk5, chunk1);

  const bytes = CryptoJS.AES.decrypt(text, secret);
  const decryptedText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedText;
}

module.exports = {
  encrypt,
  decrypt,
};
