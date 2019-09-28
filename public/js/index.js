$(document).ready(function() {
  $("form").on("submit", function() {
    event.preventDefault();
    let usernameV = $('[name="fname"]')
      .val()
      .trim();
    let emailV = $('[name="email"]')
      .val()
      .trim();
    let passwordV = $('[name="pwd"]')
      .val()
      .trim();
    let birthmonthV = $('[name="month"]')
      .val()
      .trim();
    let birthdateV = $('[name="date"]')
      .val()
      .trim();
    let birthyearV = $('[name="year"]')
      .val()
      .trim();
    var genderV = $("#genderSelect")
      .val()
      .trim();
    let gender = $("#genderSelect")
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
});
