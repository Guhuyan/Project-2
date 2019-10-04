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
    }).then(function() {
      window.location.href = "/login";
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

  $("#open-button").on("click", function() {
    $("#myForm").show();
    $("#open-button").hide();
  });
  $("button[name ='closeChat']").on("click", function() {
    $("#myForm").hide();
    $("#open-button").show();
  });
});
