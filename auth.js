// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyD7t_b2RAVwTHCw2H8l7OJ84qg6VPNv4e0",
    authDomain: "skyflowesports-a79e7.firebaseapp.com",
    projectId: "skyflowesports-a79e7",
    storageBucket: "skyflowesports-a79e7.firebasestorage.app",
    messagingSenderId: "520696951008",
    appId: "1:520696951008:web:cd99681cbd8b9b289ae085"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "dashboard.html"; // redirect
        })
        .catch((error) => {
            errorMsg.textContent = error.message;
        });
}
