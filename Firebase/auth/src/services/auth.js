import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function signInWithEmailPassword(email,password,setError) {
    
  // [START auth_signin_password]
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)

      setError((_v)=>({..._v,error:null}))
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      setError((_v)=>({..._v,error:errorMessage}))

    });
 
   
    
  // [END auth_signin_password]
}

const singInModified= async(email,password,setError)=>{ //função modificada para conseguir esperar resposta na pagina de login
  const response= await firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error)=>{
    if(error){
      console.log(error.message);
      var errorMessage = error.message;
      setError((_v)=>({..._v,error:errorMessage}))
      return null
      }})
  if(response){
    setError((_v)=>({..._v,error:null}))
    return response
  }
}

function signUpWithEmailPassword(email,password,setUserID) {

  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      setUserID(user.uid)
      console.log(`ID: ${user.uid}`)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.log(errorMessage)
    });
    
  // [END auth_signup_password]
}

const singUpModified=async(email,password)=>{
  const response= await firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch((error)=>{
    if(error){
      console.log(error.message);
      return null
      }})
  if(response){
    return response.user.uid
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
  const email = "sam@example.com";
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_send_password_reset]
}


function verifyUserConected(setAuth,setUserID){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
    
    const uid = user.uid;
    setAuth(true)
    setUserID(user.uid)
    // ...
    } else {
        setAuth(false)
        console.log("User is signed out")
    // User is signed out
    // ...
  }
});
}

function singOut(){
    firebase.auth().signOut().then(function() {

        console.log("Sign-out successful.")
        // Sign-out successful.
      }).catch(function(error) {
 
        console.log("An error happened.")
        // An error happened.
      });
}
export {signInWithEmailPassword,signUpWithEmailPassword,verifyUserConected,singOut,singInModified,singUpModified}