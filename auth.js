import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
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

// වෙනත් Tools වලට (උදා: Invoice) අඳුරගන්න Global Variable එකක් හදනවා
window.isProUser = false; 

// 2. Google Login එක
window.loginWithGoogle = async function() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        // අලුත් කෙනෙක් නම් Database එකට ලියනවා
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
        window.location.reload(); // Login වුණාම Page එක රීලෝඩ් කරනවා
    } catch (error) {
        console.error(error);
        alert("Login වීමේදී දෝෂයක් ඇති විය!");
    }
};

// 3. Logout එක
window.logoutUser = async function() {
    await signOut(auth);
    window.location.reload();
};

// 4. හැමවෙලේම User ගේ Status එක Check කරන කොටස
onAuthStateChanged(auth, async (user) => {
    const navButtons = document.getElementById('nav-buttons');
    
    if (user) {
        // User ලොගින් වෙලා නම් DB එකෙන් විස්තර ගන්නවා
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        let roleBadge = "FREE";
        
        if (userSnap.exists()) {
            const data = userSnap.data();
            
            // PRO ද කියලා Check කරනවා සහ Date එක Expire වෙලාද බලනවා
            if (data.role === "pro" && data.pro_end_date) {
                // අද දිනය (උදා: 2026-09-08)
                const today = new Date().toISOString().split('T')[0];
                
                if (today <= data.pro_end_date) {
                    window.isProUser = true; // මේක True වුණාම Invoice එකේ Watermark මැකෙනවා!
                    roleBadge = `<span class="text-gold font-bold">PRO</span>`;
                } else {
                    // Expire වෙලා නම් ඔටෝම ආයේ Free කරනවා
                    await updateDoc(userRef, { role: "free" });
                    alert("ඔබගේ PRO කාලසීමාව අවසන් වී ඇත. කරුණාකර නැවත Upgrade කරන්න.");
                }
            }
        }

        // Navbar එකේ නම පෙන්වීම
        if(navButtons) {
            navButtons.innerHTML = `
                <span class="text-gray-300 mr-4 text-sm hidden md:inline">Hi, ${user.displayName.split(" ")[0]} (${roleBadge})</span>
                <button onclick="logoutUser()" class="text-white hover:text-red-400 mr-4 font-semibold">Logout</button>
            `;
        }
    } else {
        // ලොගින් වෙලා නැත්නම් සාමාන්‍ය බොත්තම් දෙක පෙන්වීම
        if(navButtons) {
            navButtons.innerHTML = `
                <button onclick="loginWithGoogle()" class="text-white hover:text-gray-300 mr-4 font-semibold">Login</button>
                <button class="bg-gold text-navy font-bold px-5 py-2 rounded shadow hover:bg-yellow-300 transition">Go Pro</button>
            `;
        }
    }
});