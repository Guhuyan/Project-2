$(document).ready(function() {
  $(".signup-form").on("submit", function() {
    event.preventDefault();
    $.post("/register", {
      type: "POST",
      username: $('[name="username"]')
        .val()
        .trim(),
      password: $('[name="pwd"]')
        .val()
        .trim(),
      email: $('[name="email"]')
        .val()
        .trim(),
      birthmonth: $('[name="month"]')
        .val()
        .trim(),
      birthday: $('[name="date"]')
        .val()
        .trim(),
      birthyear: $('[name="year"]')
        .val()
        .trim(),
      gender: $("#genderSelect")
        .val()
        .trim(),
      isLoggedin: false
    });
  });

  $("#login-form").on("submit", function() {
    event.preventDefault();
    $.post("/login", {
      type: "POST",
      email: $('[name="user_email"]')
        .val()
        .trim(),
      password: $('[name="pwd"]')
        .val()
        .trim()
    });
  });

  $(".open-button").on("click", function() {
    document.getElementById("myForm").style.display = "block";
  });
  $("#closeChat").on("click", function() {
    document.getElementById("myForm").style.display = "none";
  });

  $("#send").on("click", function() {
    console.log($("#msg").val());
    event.preventDefault();
    sendMessage({ message: $("#msg").val() });
    $("#messageForm").trigger("reset");
  });
  getMessages();
  // addMessages()
  // io.on('message', addMessages)
  // socket.on('message', addMessages)
  function addMessages(message) {
    $("#messages").append(`<p> ${message.message} </p>`);
  }
  function getMessages() {
    $.get("http://localhost:8080/messages", data => {
      data.forEach(addMessages);
    });
  }
  function sendMessage(message) {
    $.post("http://localhost:8080/messages", message);
  }
});
