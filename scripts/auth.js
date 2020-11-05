// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    // get user info
    e.preventDefault();
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    const p_confirm = signupForm['password_confirm'].value;
    
    // sign up the user
    if (password == p_confirm) {
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("loggedIn").className ="alert alert-success";
        document.getElementById("loggedIn").innerHTML = "Error : " + errorMessage;
    }).then(cred => {
        console.log(cred.user);
        signupForm.reset();
        document.getElementById("loggedIn").className ="alert alert-success";
        document.getElementById("loggedIn").innerHTML = email + "has signed up!"
    });
    } else {
         document.getElementById("loggedIn").className ="alert alert-success";
         document.getElementById("loggedIn").innerHTML = "Error : password entries don't match!";
    }
})
