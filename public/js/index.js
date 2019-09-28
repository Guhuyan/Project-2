$("form").on("submit", function() {
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
  //TEMP
  /*
    let userNew = sequelize.define("User", {
    username: username,
    email: email,
    password: password,
    birthday
  });
    */
});

// $('[name="ElementNameHere"]').doStuff();
