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
  let salvarContato = `tel:${num}`;
  window.location.replace("tel:22992427891");
  //window.location = "tel:22992427891";
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    //Conectmessage();
    new QRCode(qrcodeContainer, website);

    /*With some styles*/
document.querySelector("button._35EW6").click();
    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Please enter a valid URL");
  }
}
function chengerInputCel(number) {
  number = number.replace(/^(\d{2})/g, "(22) ");
  number = number.replace(/^(\d{5})/g, "$1-");
  number = number.replace(/(\d{5})(\d{4})/g, "$1-$2");

  document.querySelector("input").value = number;
  //document.querySelector("div").innerHTML = number;
}

function saveContact() {
  client.on("ready", () => {
    console.log("Client is ready!");

    // Number where you want to send the message.
    const number = "+5522992427891";

    // Your message.
    const text = "Hey john";

    // Getting chatId from the number.
    // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
    const chatId = number.substring(1) + "@c.us";

    // Sending message.
    client.sendMessage(chatId, text);
  });
  new QRCode(qrcodeContainer, salvarContato);
}
