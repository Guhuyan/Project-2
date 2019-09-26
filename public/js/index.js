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

  console.log(username);
  console.log(email);
  console.log(password);
  console.log(birthmonth);
  console.log(birthdate);
  console.log(birthyear);
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
