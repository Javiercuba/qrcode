function generateQRCode() {
  let num = document.getElementById("phone").value;
  let msg = document.getElementById("msg").value;
  let name = document.getElementById("name").value; //let website1 = document.getElementById("website").value;

  num = num.replace("(", "");
  num = num.replace(")", "");
  num = num.replace("-", "");
  num = num.replace(/\s/g, "");

  let website = `https://wa.me/5522998465678?text=${name}%20,%20OI%20COMO%20da%20${msg}`;
  //let website = `https://api.whatsapp.com/send?phone=+5522998465678&text=%20oi`;
  //let salvarContato = `tel:${num}`;
  //window.location.replace("tel:22992427891");
  
  window.location.href =
    "https://wa.me/5522998465678?text=$%20,%20OI%20COMO%20da%20${msg}";
  window.location = "tel:22992427891";
  
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    //Conectmessage();
    new QRCode(qrcodeContainer, website);

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

//function generateQRCode() {}
