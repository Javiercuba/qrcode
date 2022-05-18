function generateQRCode() {
  let servidor = `https://qrcode-psi.vercel.app`;

  let qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";
  //Conectmessage();
  new QRCode(qrcodeContainer,servidor );
  document.getElementById("qrcode-container").style.display = "block";
}

