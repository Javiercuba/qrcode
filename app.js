const { M } = require("qrcode-terminal/vendor/QRCode/QRErrorCorrectLevel");

function generateQRCode() {
  let num = document.getElementById("phone").value;
  let msg = document.getElementById("msg").value;
  let name = document.getElementById("name").value; //let website1 = document.getElementById("website").value;

  num = num.replace("(", "");
  num = num.replace(")", "");
  num = num.replace("-", "");
  num = num.replace(/\s/g, "");
  let servidor = `https://qrcode-psi.vercel.app`;

  let qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";
  //Conectmessage();
  new QRCode(qrcodeContainer,servidor );
  

  document.getElementById("qrcode-container").style.display = "block";
}
function chengerInputCel(number) {
  number = number.replace(/^(\d{2})/g, "(22) ");
  number = number.replace(/^(\d{5})/g, "$1-");
  number = number.replace(/(\d{5})(\d{4})/g, "$1-$2");

  document.querySelector("input").value = number;

}

