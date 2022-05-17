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

  window.location.replace(NumeroContato);
}

function RealizarTarefas() {
    SendMessage();
    EnviarMsg();
}