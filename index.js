const nombre = document.getElementById("name");
const nombreLabel = document.getElementById("name-lbl");

const email = document.getElementById("email");
const emailLabel = document.getElementById("email-lbl");

const phone = document.getElementById("phone");
const phoneLabel = document.getElementById("phone-lbl");

const message = document.getElementById("message");
const messageLabel = document.getElementById("message-lbl");

const submitBtn = document.getElementById("form-submit");

const warning = document.getElementById("warning");

submitBtn.addEventListener("pointerup", (e) => {
  e.preventDefault();
  let warnings = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let entrar = false;

  if (nombre.value === null || nombre.value.length <= 0) {
    nombreLabel.innerHTML =
      '<label for="name" id="name-lbl">Full Name *</label>';
    nombre.style.border = "0.5px solid red";
    warnings += "Invalid name, no name written <br>";
    entrar = true;
  } else {
    nombreLabel.innerHTML = '<label for="name" id="name-lbl">Full Name</label>';
    nombre.style.border = "0px solid transparent";
  }

  if (!regexEmail.test(email.value)) {
    emailLabel.innerHTML = '<label for="email" id="email-lbl">Email *</label>';
    email.style.border = "0.5px solid red";
    warnings += "Invalid email format <br>";
    entrar = true;
  } else {
    emailLabel.innerHTML = '<label for="email" id="email-lbl">Email</label>';
    email.style.border = "0px solid transparent";
  }

  if (message.value.length < 50) {
    messageLabel.innerHTML =
      '<label for="message" id="message-lbl">Message *</label>';
    message.style.border = "0.5px solid red";
    warnings += "Invalid message, it must be at least 50 characters long <br>";
    entrar = true;
  } else {
    messageLabel.innerHTML =
      '<label for="message" id="message-lbl">Message</label>';
    message.style.border = "0px solid transparent";
  }

  if (phone.value[0] !== "+" || phone.value.length < 10) {
    phoneLabel.innerHTML = '<label for="phone" id="phone-lbl">Phone *</label>';
    phone.style.border = "0.5px solid red";
    warnings +=
      "Invalid phone number, it must have at least 11 numbers and start with a '+' <br>";
    entrar = true;
  } else {
    phoneLabel.innerHTML = '<label for="phone" id="phone-lbl">Phone</label>';
    phone.style.border = "0px solid transparent";
  }

  if (entrar) {
    warning.style.color = "#e63f3f";
    warning.innerHTML = warnings;
  } else {
    //limpiamos los cambios de los fallos
    nombre.style.border = "0px solid transparent";
    nombreLabel.innerHTML = '<label for="name" id="name-lbl">Full Name</label>';
    message.style.border = "0px solid transparent";
    messageLabel.innerHTML =
      '<label for="message" id="message-lbl">Message</label>';
    phoneLabel.innerHTML = '<label for="phone" id="phone-lbl">Phone</label>';
    phone.style.border = "0px solid transparent";
    email.style.border = "0px solid transparent";
    emailLabel.innerHTML = '<label for="email" id="email-lbl">Email</label>';

    //enviamos el formulario
    let url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";

    const datos = {
      code: "12345367",
      name: nombre.value,
      message: message.value,
      phone: phone.value,
      email: email.value,
    };

    const body = { item: datos };

    const fetchParams = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
      },
      body: JSON.stringify(body),
    };

    fetch(url, fetchParams).then((response) => {
      if (response.ok) {
        //mostramos
        warning.style.color = "#72ab7e";
        warning.innerHTML = "Sent!";
      } else {
        warning.style.color = "#e63f3f";
        warning.innerHTML = "There has been a problem during the submission, try again later.";
      }
    }).catch((err) => {
        warning.style.color = "#e63f3f";
        warning.innerHTML = "There has been a problem during the submission, try again later.</br>" + err;
    });
  }
});
