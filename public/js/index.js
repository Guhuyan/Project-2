$(document).ready(function () {
  $("form").on("submit", function () {
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

    $.post("/api/users/create", {
      type: "POST",
      username: username,
      password: password,
      email: email,
      birthmonth: birthmonth,
      birthday: birthdate,
      birthyear: birthyear,
      gender: gender,
      isLoggedin: false
    }).then(function () {
      res.redirect("/");
    });
  });
});
