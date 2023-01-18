
import { doc, getDoc, getFirestore, setDoc, collection } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCOhODpQCr2ZYNRINcREJGScrvd4nSOLM4",
    authDomain: "virtual-guru-342313.firebaseapp.com",
    projectId: "virtual-guru-342313",
    storageBucket: "virtual-guru-342313.appspot.com",
    messagingSenderId: "304535808408",
    appId: "1:304535808408:web:c02eb0a2c4075a4a9c63ed",
    measurementId: "G-DPHCPN62PS"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getDBData= async (userID,setInfo)=>{


    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setInfo(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    console.log("getDBData")
}


const setDBData= async (userID,info)=>{

  await setDoc(doc(db, "users", userID), {
   ...info
  });

  console.log("setDBData")
}


export {getDBData,setDBData}