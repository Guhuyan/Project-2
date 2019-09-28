

$(document).ready(function () {
  $("form").on("submit", function () {
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
    var genderV = $('#genderSelect')
    .val()
    .trim();
  let gender = $("#genderSelect")
    .val()
    .trim();

<<<<<<< HEAD
    //post to req.body
    $.post("/api/users/create", {
      type: "POST",
      username: usernameV,
      password: passwordV,
      email: emailV,
      birthmonth: birthmonthV,
      birthday: birthdateV,
      birthyear: birthyearV,
      gender: genderV,
      isLoggedin: false
    }).then(function () {
      res.redirect('/');
    })
=======
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
  //TEMP
  /*
    let userNew = sequelize.define("User", {
    username: username,
    email: email,
    password: password,
    birthday
>>>>>>> Gue
  });
});
