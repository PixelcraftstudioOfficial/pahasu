import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

// 1. Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCVvx29Bi_dK22QA9LvqmkQa47CDzlRSos",
    authDomain: "pahasu-lk.firebaseapp.com",
    projectId: "pahasu-lk",
    storageBucket: "pahasu-lk.firebasestorage.app",
    messagingSenderId: "817810048963",
    appId: "1:817810048963:web:ac09ddc8f0e8c1ae455f76",
    measurementId: "G-574L3FNX2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

window.isProUser = false; 

// =======================================
// 2. GOOGLE LOGIN (For login.html only)
// =======================================
const btnGoogleLogin = document.getElementById('btn-google-login');
if (btnGoogleLogin) {
    btnGoogleLogin.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                await setDoc(userRef, {
                    name: user.displayName,
                    email: user.email,
                    role: "free",
                    pro_start_date: null,
                    pro_end_date: null,
                    created_at: new Date().toISOString()
                });
            }
            window.location.href = "index.html"; // Login වුණාම Home එකට යනවා
        } catch (error) {
            console.error(error);
            alert("Google Login Error: " + error.message);
        }
    });
}

// =======================================
// 3. EMAIL / PASSWORD LOGIN
// =======================================
const formLogin = document.getElementById('form-login');
if (formLogin) {
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-pass').value;
        try {
            await signInWithEmailAndPassword(auth, email, pass);
            window.location.href = "index.html";
        } catch (error) {
            alert("Login Error: කරුණාකර Email සහ Password නිවැරදිදැයි පරීක්ෂා කරන්න.");
        }
    });
}

// =======================================
// 4. EMAIL / PASSWORD REGISTER
// =======================================
const formRegister = document.getElementById('form-register');
if (formRegister) {
    formRegister.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name') ? document.getElementById('reg-name').value : "User";
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-pass').value;
        try {
            const result = await createUserWithEmailAndPassword(auth, email, pass);
            const user = result.user;
            
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: user.email,
                role: "free",
                pro_start_date: null,
                pro_end_date: null,
                created_at: new Date().toISOString()
            });
            window.location.href = "index.html";
        } catch (error) {
            alert("Registration Error: " + error.message);
        }
    });
}

// =======================================
// 5. LOGOUT FUNCTION
// =======================================
window.logoutUser = async function() {
    await signOut(auth);
    window.location.reload();
};

// =======================================
// 6. AUTH STATE LISTENER (Navbar Update)
// =======================================
onAuthStateChanged(auth, async (user) => {
    const navButtons = document.getElementById('nav-buttons');
    
    if (user) {
        // User ලොගින් වෙලා නම් DB එකෙන් විස්තර ගන්නවා
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        let roleBadge = "FREE";
        let displayName = user.displayName ? user.displayName.split(" ")[0] : "User";
        
        if (userSnap.exists()) {
            const data = userSnap.data();
            if(data.name) displayName = data.name.split(" ")[0];

            if (data.role === "pro" && data.pro_end_date) {
                const today = new Date().toISOString().split('T')[0];
                if (today <= data.pro_end_date) {
                    window.isProUser = true; 
                    roleBadge = `<span class="text-gold font-bold">PRO</span>`;
                } else {
                    await updateDoc(userRef, { role: "free" });
                    alert("ඔබගේ PRO කාලසීමාව අවසන් වී ඇත. කරුණාකර නැවත Upgrade කරන්න.");
                }
            }
        }

        if(navButtons) {
            navButtons.innerHTML = `
                <span class="text-gray-300 mr-4 text-sm hidden md:inline">Hi, ${displayName} (${roleBadge})</span>
                <button onclick="logoutUser()" class="text-white hover:text-red-400 mr-4 font-semibold">Logout</button>
            `;
        }
    } else {
        // ලොගින් වෙලා නැත්නම් මොකුත් කරන්නේ නෑ! (HTML එකේ තියෙන ලින්ක්ස් ටික එහෙම්මම තියෙනවා)
        // මේක හිස්ව තියෙන නිසා දැන් Go Pro Popup එකයි, login.html යන එකයි 100% ක් වැඩ කරනවා.
    }
});
