const toolsRegistry = {

    // 1. Age Calculator
    'age-calculator': {
        title: "Exact Age Calculator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy text-center">
                <h1 class="text-3xl font-bold text-navy mb-2">Age Calculator</h1>
                <p class="text-gray-600 mb-8">ඔබගේ උපන්දිනය ලබා දී අදට නිවැරදිම වයස ගණනය කරන්න.</p>
                
                <div class="max-w-md mx-auto">
                    <input type="date" id="dob-input" class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy outline-none mb-6 text-lg">
                    <button id="calc-btn" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow transition text-lg mb-6">Calculate Age</button>
                </div>

                <div id="result-box" class="hidden bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 mt-4">
                    <div class="text-4xl font-black text-navy mb-2" id="age-main">--</div>
                    <div class="flex justify-center gap-4 text-gray-600 font-bold" id="age-sub"></div>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-btn').addEventListener('click', () => {
                const dobVal = document.getElementById('dob-input').value;
                if(!dobVal) return alert("කරුණාකර උපන්දිනයක් තෝරන්න!");

                const dob = new Date(dobVal);
                const today = new Date();

                let years = today.getFullYear() - dob.getFullYear();
                let months = today.getMonth() - dob.getMonth();
                let days = today.getDate() - dob.getDate();

                if (days < 0) {
                    months--;
                    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                    days += lastMonth.getDate();
                }
                if (months < 0) { years--; months += 12; }

                document.getElementById('result-box').classList.remove('hidden');
                document.getElementById('age-main').innerText = `${years} Years Old`;
                document.getElementById('age-sub').innerHTML = `<span>මාස: ${months}</span> | <span>දින: ${days}</span>`;
            });
        }
    },

    // 2. QR Code Generator
    'qr-generator': {
        title: "QR Code Generator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy">
                <h1 class="text-3xl font-bold text-navy mb-2 text-center">QR Code Generator</h1>
                <p class="text-gray-600 mb-8 text-center">Link එකක් හෝ Text එකක් ලබා දී ක්ෂණිකව QR කේතයක් සාදාගන්න.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label class="block font-bold text-gray-700 mb-2">ඔබගේ Text හෝ Link එක:</label>
                        <textarea id="qr-text" rows="4" class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy outline-none mb-4" placeholder="https://www.example.com"></textarea>
                        <button id="qr-btn" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow transition">Generate QR Code</button>
                    </div>
                    <div class="flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <img id="qr-image" src="" alt="QR Code" class="hidden w-48 h-48 mb-4 shadow-sm">
                        <p id="qr-placeholder" class="text-gray-400 font-bold">QR කේතය මෙහි දිස්වේ</p>
                        <a id="qr-download" href="#" download="Pahasu_QR.png" class="hidden mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow transition">Download QR</a>
                    </div>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('qr-btn').addEventListener('click', () => {
                const text = document.getElementById('qr-text').value;
                if(!text) return alert("කරුණාකර Link එකක් හෝ Text එකක් ඇතුලත් කරන්න!");

                // Using a free API for quick generation without external heavy libraries
                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
                
                const qrImage = document.getElementById('qr-image');
                qrImage.src = qrUrl;
                qrImage.classList.remove('hidden');
                document.getElementById('qr-placeholder').classList.add('hidden');
                
                const downloadBtn = document.getElementById('qr-download');
                downloadBtn.href = qrUrl;
                downloadBtn.classList.remove('hidden');
            });
        }
    },

    // 3. Word & Character Counter
    'word-counter': {
        title: "Word & Character Counter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy">
                <h1 class="text-3xl font-bold text-navy mb-2 text-center">Word & Character Counter</h1>
                <p class="text-gray-600 mb-8 text-center">ඔබගේ ලිපියේ වචන ගණන සහ කියවීමට යන කාලය පරීක්ෂා කරන්න.</p>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                    <div class="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                        <div class="text-3xl font-black text-navy" id="word-count">0</div>
                        <div class="text-sm font-bold text-gray-500">Words</div>
                    </div>
                    <div class="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                        <div class="text-3xl font-black text-navy" id="char-count">0</div>
                        <div class="text-sm font-bold text-gray-500">Characters</div>
                    </div>
                    <div class="bg-green-50 border border-green-100 p-4 rounded-lg">
                        <div class="text-3xl font-black text-green-700" id="read-time">0m</div>
                        <div class="text-sm font-bold text-gray-500">Reading Time</div>
                    </div>
                    <div class="bg-gray-100 border border-gray-200 p-4 rounded-lg">
                        <div class="text-3xl font-black text-gray-700" id="space-count">0</div>
                        <div class="text-sm font-bold text-gray-500">Spaces</div>
                    </div>
                </div>

                <textarea id="text-input" rows="8" class="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-navy outline-none" placeholder="ඔබගේ ලිපිය මෙතන Type/Paste කරන්න..."></textarea>
            </div>
        `,
        init: function() {
            const input = document.getElementById('text-input');
            input.addEventListener('input', () => {
                const text = input.value;
                const charCount = text.length;
                // Remove extra spaces and split by space for words
                const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
                const spaceCount = text.split(" ").length - 1;
                // Average reading speed 200 words per minute
                const readTime = Math.ceil(wordCount / 200);

                document.getElementById('word-count').innerText = wordCount;
                document.getElementById('char-count').innerText = charCount;
                document.getElementById('space-count').innerText = spaceCount;
                document.getElementById('read-time').innerText = `${readTime}m`;
            });
        }
    },

    // 4. Secure Password Generator
    'password-generator': {
        title: "Secure Password Generator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-2xl mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-2 text-center">Secure Pass Generator</h1>
                <p class="text-gray-600 mb-8 text-center">හැක් කිරීමට අපහසු ශක්තිමත් මුරපද (Passwords) සාදාගන්න.</p>
                
                <div class="relative mb-6">
                    <input type="text" id="pass-result" readonly class="w-full p-4 pr-24 text-2xl font-mono text-center border-2 border-gray-300 rounded-lg bg-gray-50 outline-none">
                    <button id="copy-btn" class="absolute right-2 top-2 bg-navy hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition">Copy</button>
                </div>

                <div class="mb-6">
                    <label class="block font-bold text-gray-700 mb-2">Password Length: <span id="len-val" class="text-navy text-xl">12</span></label>
                    <input type="range" id="pass-len" min="6" max="32" value="12" class="w-full">
                </div>

                <div class="grid grid-cols-2 gap-4 mb-8">
                    <label class="flex items-center space-x-2 cursor-pointer font-bold text-gray-700">
                        <input type="checkbox" id="chk-upper" checked class="w-5 h-5 accent-navy"> <span>Uppercase (A-Z)</span>
                    </label>
                    <label class="flex items-center space-x-2 cursor-pointer font-bold text-gray-700">
                        <input type="checkbox" id="chk-lower" checked class="w-5 h-5 accent-navy"> <span>Lowercase (a-z)</span>
                    </label>
                    <label class="flex items-center space-x-2 cursor-pointer font-bold text-gray-700">
                        <input type="checkbox" id="chk-num" checked class="w-5 h-5 accent-navy"> <span>Numbers (0-9)</span>
                    </label>
                    <label class="flex items-center space-x-2 cursor-pointer font-bold text-gray-700">
                        <input type="checkbox" id="chk-sym" checked class="w-5 h-5 accent-navy"> <span>Symbols (!@#$)</span>
                    </label>
                </div>

                <button id="gen-btn" class="w-full bg-gold hover:bg-yellow-500 text-navy font-bold text-lg py-4 rounded-lg shadow transition">Generate Password</button>
            </div>
        `,
        init: function() {
            const slider = document.getElementById('pass-len');
            const lenVal = document.getElementById('len-val');
            
            slider.addEventListener('input', () => lenVal.innerText = slider.value);

            document.getElementById('gen-btn').addEventListener('click', () => {
                const len = slider.value;
                const upper = document.getElementById('chk-upper').checked;
                const lower = document.getElementById('chk-lower').checked;
                const num = document.getElementById('chk-num').checked;
                const sym = document.getElementById('chk-sym').checked;

                const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                const lowerChars = "abcdefghijklmnopqrstuvwxyz";
                const numChars = "0123456789";
                const symChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

                let allowed = "";
                if(upper) allowed += upperChars;
                if(lower) allowed += lowerChars;
                if(num) allowed += numChars;
                if(sym) allowed += symChars;

                if(!allowed) return alert("කරුණාකර අවම වශයෙන් එක් වර්ගයක් හෝ තෝරන්න!");

                let password = "";
                for(let i = 0; i < len; i++) {
                    const random = Math.floor(Math.random() * allowed.length);
                    password += allowed[random];
                }

                document.getElementById('pass-result').value = password;
            });

            document.getElementById('copy-btn').addEventListener('click', () => {
                const passField = document.getElementById('pass-result');
                if(!passField.value) return;
                passField.select();
                document.execCommand('copy');
                alert("Password Copied!");
            });

            // Generate one on load
            document.getElementById('gen-btn').click();
        }
    }
};

// URL එකෙන් අදාළ ටූල් එක හොයාගෙන Load කරන ප්‍රධාන Function එක
function loadTool() {
    const urlParams = new URLSearchParams(window.location.search);
    const appName = urlParams.get('app'); 
    const container = document.getElementById('app-container');

    if (appName && toolsRegistry[appName]) {
        const tool = toolsRegistry[appName];
        document.title = tool.title;
        container.innerHTML = tool.html;
        
        if (tool.init) {
            tool.init();
        }
    } else {
        container.innerHTML = `
            <div class="text-center py-20">
                <h1 class="text-4xl font-bold text-red-500 mb-4">404</h1>
                <h2 class="text-2xl text-gray-700 font-bold">Tool Not Found!</h2>
                <a href="index.html" class="text-blue-500 underline mt-4 inline-block">Back to Home</a>
            </div>
        `;
    }
}

window.onload = loadTool;