function generateQRCode() {
  let num = document.getElementById("phone").value;
  let msg = document.getElementById("msg").value;
  let name = document.getElementById("name").value; //let website1 = document.getElementById("website").value;

  num = num.replace('(', '');
  num = num.replace(')', '');
  num = num.replace("-", "");
  num = num.replace(/\s/g, "");
  

  let website = `https://wa.me/55${num}?text=${name}%20,%20${msg}`;
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, website);
    /*With some styles*/

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
  var dataContact = { 'First name': document.forms.first_name.value }
  navigator.contacs.newContact(dataContact, onSucessContact);
}
function onSucessContact(contac) {
  navigator.notification.alert('Contato criado','Contacts',"Done");
}

