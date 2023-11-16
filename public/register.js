function signInWithEmailPassword() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // [START auth_signin_password]
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      document.getElementById("login").innerHTML = '<b id="text"> <img id="mail" src="image.png" width="35px" height="29px">  Hello <i>' + user.email + '</i></b>'
      console.log(user)

      userId = user.uid;
      userEmail = user.email;
      userRef = firebase.database().ref('players/' + userId);

      if ( true ) {
        userRef.set({
          set: true,
          id: userId,
          email: userEmail,
          bought: false,
          path: "index.home.html",
        })
      }
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
  // [END auth_signin_password]
}

function signUpWithEmailPassword() {
  var email = document.getElementById("reg-email").value;
  var password = document.getElementById("reg-password").value;
  var password_confirm = document.getElementById("reg-password-confirm").value;

  if (password == password_confirm) {
  // [START auth_signup_password]
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        document.getElementById("login").innerHTML = '<b id="text"> <img src="image.png" width="35px" height="29px">  Hello <i>' + user.email + '</i></b>'
        console.log(user)

        userId = user.uid;
        userEmail = user.email;
        userRef = firebase.database().ref('players/' + userId);

        if ( true ) {
          userRef.set({
            set: true,
            id: userId,
            email: userEmail,
            bought: false,
            path: "index.home.html",
          })
        }
      // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      // ..
      });
  // [END auth_signup_password]
  } else {
    alert("Firebase: The password must match the confirm password (auth/password-nomatch-confirm).");
  }
}
function sendEmailVerification() {
  // [START auth_send_email_verification]
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent!
      // ...
    });
  // [END auth_send_email_verification]
}

function sendPasswordReset() {
  var email = document.getElementById("email").value;
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      document.getElementById("login").innerHTML = '<b id="text"> <img src="image.png" width="35px" height="29px">  Password reset email sent to <i>' + email + '</i></b>'
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
      // ..
    });
  // [END auth_send_password_reset]
}


function GoogleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)

          .then(result => {
              const user = result.user;
              document.getElementById("login").innerHTML = '<b id="text"> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" height="48" viewBox="0 0 48 48" width="48"><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#ffc107"/><path d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z" fill="#ff3d00"/><path d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z" fill="#4caf50"/><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z" fill="#1976d2"/></svg>  Hello <i>' + user.displayName + '</i></b>'
              console.log(user)

              userId = user.uid;
              userEmail = user.email;
              userRef = firebase.database().ref('players/' + userId);

              if ( true ) {

                  userRef.set({
                      set: true,
                      id: userId,
                      email: userEmail,
                      bought: false,
                      path: "index.home.html",
                  })

              }

              

          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorMessage);
            // ..
          });
}