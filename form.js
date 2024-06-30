   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
   import {
    getDatabase,
    ref,
    push,
    set,
    onValue,
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

   const firebaseConfig = {
     apiKey: "AIzaSyD6Xe035sTcDjEVqHMvdYtEmxtUGlArMXk",
     authDomain: "neddquiz.firebaseapp.com",
     databaseURL: "https://neddquiz-default-rtdb.firebaseio.com",
     projectId: "neddquiz",
     storageBucket: "neddquiz.appspot.com",
     messagingSenderId: "319841902543",
     appId: "1:319841902543:web:5a765ce0b8918d227abcba",
     measurementId: "G-SMMV3CV1EN"
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
   const db = getDatabase();
         




document.getElementById("submitBtn").addEventListener("click", function() {
  
     let user = document.getElementById("name").value;
     let phoneNumber = document.getElementById("phoneNumber").value;
     let age = document.getElementById("age").value;
     let define = document.getElementById("define").value;
     let code = document.querySelector(".code").value;
          if (code === "hammad" && user !== "" && phoneNumber !== "" && age !== "" && define !== "") {
            localStorage.setItem("user",JSON.stringify((user)))
            localStorage.setItem("phone",JSON.stringify((phoneNumber)))
            localStorage.setItem("age",JSON.stringify((age)))
            localStorage.setItem("define",JSON.stringify((define)))
            localStorage.setItem("code",JSON.stringify((code)))
            
            location.replace("../question/Quiz.html");
           
        
}
     else {
      alert("Your code is not acceptable or all fields are not filled.");
    }
  });
  
         




