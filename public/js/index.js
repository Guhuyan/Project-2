$(document).ready(function() {
  $(".signup-form").on("submit", function() {
    event.preventDefault();
    let username = $('[name="fname"]')
      .val()
      .trim();
    let email = $('[name="email"]')
      .val()
      .trim();
    let password = $('[name="pwd"]')
      .val()
      .trim();
    let birthmonth = $('[name="month"]')
      .val()
      .trim();
    let birthdate = $('[name="date"]')
      .val()
      .trim();
    let birthyear = $('[name="year"]')
      .val()
      .trim();
    var gender = $("#genderSelect")
      .val()
      .trim();

    $.post("/register", {
      type: "POST",
      username: username,
      password: password,
      email: email,
      birthmonth: birthmonth,
      birthday: birthdate,
      birthyear: birthyear,
      gender: gender,
      isLoggedin: false
    }).then(function() {
      res.redirect("/");
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
