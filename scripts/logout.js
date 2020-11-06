function logout() {

  //e.preventDefault();
  console.log( + "signed out");
  auth.signOut();
  location.reload();

}