const btnEncrypted = document.getElementById('encriptar');
const btnDecrypted = document.getElementById('desencriptar');
const inptTxtArea = document.getElementById('text');
const outtTextArea = document.getElementById('outtTextArea');
const copyR = document.getElementById('copyR');
const imgInf = document.getElementById('inf'); // Imagen a ocultar
const msjElements = document.querySelectorAll('.msj'); // Mensajes a ocultar

const keysEncoded = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

btnEncrypted.addEventListener('click', encryptText);
btnDecrypted.addEventListener('click', decryptText);
copyR.addEventListener('click', copyToClipboard);

function encryptText() {
  const text = inptTxtArea.value;
  let encryptedText = text;
  for (const key in keysEncoded) {
    const regex = new RegExp(key, 'g');
    encryptedText = encryptedText.replace(regex, keysEncoded[key]);
  }
  outtTextArea.value = encryptedText;

  // Oculta la imagen y los mensajes al encriptar
  imgInf.classList.add('hidden');
  msjElements.forEach(element => element.classList.add('hidden'));
}

function decryptText() {
  const text = inptTxtArea.value;
  let decryptedText = text;
  for (const key in keysEncoded) {
    const regex = new RegExp(keysEncoded[key], 'g');
    decryptedText = decryptedText.replace(regex, key);
  }
  outtTextArea.value = decryptedText;

  // Muestra la imagen y los mensajes al desencriptar
  imgInf.classList.remove('hidden');
  msjElements.forEach(element => element.classList.remove('hidden'));
}

function copyToClipboard() {
  outtTextArea.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles');
}
