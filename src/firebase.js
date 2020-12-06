import firebase from "firebase";
import "firebase/database";

let config = {
 
        apiKey: "AIzaSyAyDL7DShOrN7ef-8E5DyZUzFNwgeJNeiM",
        authDomain: "ionkid-abd2f.firebaseio.com",
        databaseURL: "https://military-1984.firebaseio.com/"
      
};

firebase.initializeApp(config);
console.log("зbs")
export default firebase.database();