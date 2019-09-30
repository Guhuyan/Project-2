$(document).ready(function() {
  $(".signup-form").on("submit", function() {
    event.preventDefault();
    $.post("/register", {
      type: "POST",
      username: $('[name="fname"]')
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

  $("#register-login").on("submit", function() {
    event.preventDefault();
    $.post("/login", {
      type: "POST",
      email: $('[name="user_email"]')
        .val()
        .trim(),
      password: $('[name="user_password"]')
        .val()
        .trim()
    });
  });
});
