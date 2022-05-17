const { M } = require("qrcode-terminal/vendor/QRCode/QRErrorCorrectLevel");

function generateQRCode() {
  let num = document.getElementById("phone").value;
  let msg = document.getElementById("msg").value;
  let name = document.getElementById("name").value; //let website1 = document.getElementById("website").value;

  num = num.replace("(", "");
  num = num.replace(")", "");
  num = num.replace("-", "");
  num = num.replace(/\s/g, "");
  let manda_msg = `https://app.whatsgw.com.br/api/WhatsGw/Send?apikey=654b7853-df52-48f0-a8b9-ec35f7fbeda6&phone_number=5522992427891&contact_phone_number=5522998465678&message_custom_id=mysoftwareid&message_type=text&message_to_group=0&message_body=Hello`;

  let website = `https://wa.me/5521967808811?text=%20testando`;
  //let website = `https://api.whatsapp.com/send?phone=+5522998465678&text=%20oi`;
  let salvarContato = `tel:22992427891`;
  //window.location.replace("tel:22992427891");
  let primeiro = `https://wa.me/5522998465678?text=%20,%20OI%20COMO%20da%20`;

  let qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";
  //Conectmessage();
  new QRCode(qrcodeContainer, "https://javiercuba.github.io/qrcode/server.html");
  

  /*With some styles*/

  document.getElementById("qrcode-container").style.display = "block";
}
function chengerInputCel(number) {
  number = number.replace(/^(\d{2})/g, "(22) ");
  number = number.replace(/^(\d{5})/g, "$1-");
  number = number.replace(/(\d{5})(\d{4})/g, "$1-$2");

  document.querySelector("input").value = number;
  //document.querySelector("div").innerHTML = number;
}

