function SendMessage() {
  const api = axios.create({
    baseURL: "https://app.whatsgw.com.br",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  const data = {
    apikey: "654b7853-df52-48f0-a8b9-ec35f7fbeda6",
    phone_number: "null",
    contact_phone_number: "21967808811",
    message_type: "text",
    message_body: "Esse é o teste oficial",
  };
  api
    .post("/api/WhatsGw/Send", data)
    .then((response) => {
      console.log(response.status);
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

function EnviarMsg() {
  let NumeroContato = "tel:21967808811";
  //let manda_msg = `https://app.whatsgw.com.br/api/WhatsGw/Send?apikey=654b7853-df52-48f0-a8b9-ec35f7fbeda6&phone_number=5522992427891&contact_phone_number=5522998465678&message_custom_id=mysoftwareid&message_type=text&message_to_group=0&message_body=OIBB`;
console.log("Numero Contato");
  // window.location.replace(NumeroContato);
  location.assign(NumeroContato);
   
}

function Link() {
  let website = `https://wa.me/5522998465678?text=%20,%20OI%20COMO%20da%20`;
  //let primeiro = `https://wa.me/5522998465678?text=%20,%20OI%20COMO%20da%20`;
  //let manda_msg = `https://app.whatsgw.com.br/api/WhatsGw/Send?apikey=654b7853-df52-48f0-a8b9-ec35f7fbeda6&phone_number=5522992427891&contact_phone_number=5522998465678&message_custom_id=mysoftwareid&message_type=text&message_to_group=0&message_body=OIBB`;
console.log("Link");
  location.assign(website);
  
  // window.location.replace(website);
}

function RealizarTarefas() {
  //SendMessage();
  // window.location(Link());

  var funArr = [Link, EnviarMsg];
  for (var i = 0; i < funArr.length; i++) {
    var interval = 2500 * (i + 1);
    (function (i, interval) {
      setInterval(function () {
        funArr[i].call(this, interval);
        //location.assign("http://localhost:5500/server.html");
      }, interval);
      
    })(i, interval);
  }
  // window.setInterval(EnviarMsg(), 4000);
}
