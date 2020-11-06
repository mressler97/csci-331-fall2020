// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['loginEmail'].value;
  const password = loginForm['loginPassword'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorMessage = error.message;
      document.getElementById("loggedIn").className ="alert alert-success";
      document.getElementById("loggedIn").innerHTML = "Error : " + errorMessage;
      console.log(errorMessage);
  }).then((cred) => {
    console.log(cred.user);
    document.getElementById("loggedIn").className ="alert alert-success";
    document.getElementById("loggedIn").innerHTML = email + " logged in!";
      console.log(email);
    loginForm.reset();
  });

});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  document.getElementById("loggedIn").className ="alert alert-success";
  document.getElementById("loggedIn").innerHTML = user.email + " already logged in!";
}
});