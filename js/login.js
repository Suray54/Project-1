function toggleRegister(e) {
  e.preventDefault();
  $("#register").toggle();
}

function toggleLogin(e) {
  e.preventDefault();
  $("#login").toggle();
}

function toggleReset(e) {
  e.preventDefault();
  $("#reset").toggle();
}

$(() => {
  $("#register-btn1").click(toggleRegister);
  $("#register-btn1").click(toggleLogin);

  $("#reset-btn1").click(toggleReset);
  $("#reset-btn1").click(toggleLogin);

  $("#login-btn2").click(toggleLogin);
  $("#login-btn2").click(toggleRegister);

  $("#login-btn3").click(toggleLogin);
  $("#login-btn3").click(toggleReset);
});
