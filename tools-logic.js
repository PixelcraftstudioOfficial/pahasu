const toolsRegistry = {

    // ==========================================
    // 1. HEALTH & FITNESS TOOLS
    // ==========================================
    
    'bmi-calculator': {
        title: "BMI Calculator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-lg mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-2">BMI Calculator</h1>
                <p class="text-gray-600 mb-8">ඔබගේ උස සහ බර ලබා දී ශරීර ස්කන්ධ දර්ශකය පරීක්ෂා කරන්න.</p>
                <div class="mb-4 text-left">
                    <label class="block font-bold text-gray-700 mb-2">බර (Weight in KG):</label>
                    <input type="number" id="bmi-weight" placeholder="e.g. 65" class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy outline-none text-lg">
                </div>
                <div class="mb-6 text-left">
                    <label class="block font-bold text-gray-700 mb-2">උස (Height in CM):</label>
                    <input type="number" id="bmi-height" placeholder="e.g. 170" class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy outline-none text-lg">
                </div>
                <button id="calc-bmi" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow transition text-lg mb-6">Calculate BMI</button>
                <div id="bmi-result-box" class="hidden bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 mt-4">
                    <div class="text-5xl font-black text-navy mb-2" id="bmi-value">--</div>
                    <div class="text-sm font-bold text-white py-1 px-4 rounded-full inline-block" id="bmi-status">--</div>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-bmi').addEventListener('click', () => {
                const w = parseFloat(document.getElementById('bmi-weight').value);
                const h = parseFloat(document.getElementById('bmi-height').value) / 100;
                if(!w || !h) return alert("කරුණාකර අගයන් නිවැරදිව ලබා දෙන්න!");
                const bmi = (w / (h * h)).toFixed(1);
                document.getElementById('bmi-value').innerText = bmi;
                const statusBox = document.getElementById('bmi-status');
                if(bmi < 18.5) { statusBox.innerText = "Underweight"; statusBox.className = "bg-blue-500 text-white py-1 px-4 rounded-full"; }
                else if(bmi <= 24.9) { statusBox.innerText = "Normal Weight"; statusBox.className = "bg-green-500 text-white py-1 px-4 rounded-full"; }
                else if(bmi <= 29.9) { statusBox.innerText = "Overweight"; statusBox.className = "bg-yellow-500 text-white py-1 px-4 rounded-full"; }
                else { statusBox.innerText = "Obesity"; statusBox.className = "bg-red-500 text-white py-1 px-4 rounded-full"; }
                document.getElementById('bmi-result-box').classList.remove('hidden');
            });
        }
    },

    'water-intake': {
        title: "Daily Water Intake | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-lg mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-2">Water Intake Calculator</h1>
                <p class="text-gray-600 mb-6">ඔබ දිනකට පානය කළ යුතු අවම ජලය ප්‍රමාණය.</p>
                <div class="mb-6 text-left">
                    <label class="block font-bold text-gray-700 mb-2">ඔබගේ බර (KG):</label>
                    <input type="number" id="water-weight" class="w-full p-3 border-2 border-gray-300 rounded-lg outline-none">
                </div>
                <button id="calc-water" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow mb-6">Calculate</button>
                <div id="water-result" class="hidden text-3xl font-black text-blue-600">-- Liters</div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-water').addEventListener('click', () => {
                const w = parseFloat(document.getElementById('water-weight').value);
                if(!w) return alert("කරුණාකර බර ලබා දෙන්න!");
                document.getElementById('water-result').innerText = (w * 0.033).toFixed(2) + " Liters / Day";
                document.getElementById('water-result').classList.remove('hidden');
            });
        }
    },

    // ==========================================
    // 2. UNIT CONVERTERS
    // ==========================================

    'temp-converter': {
        title: "Temperature Converter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-lg mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-6 text-center">Temperature Converter</h1>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block font-bold text-gray-700 mb-1">Celsius (°C)</label>
                        <input type="number" id="celsius" class="w-full p-3 border-2 border-gray-300 rounded-lg">
                    </div>
                    <div>
                        <label class="block font-bold text-gray-700 mb-1">Fahrenheit (°F)</label>
                        <input type="number" id="fahrenheit" class="w-full p-3 border-2 border-gray-300 rounded-lg">
                    </div>
                </div>
            </div>
        `,
        init: function() {
            const c = document.getElementById('celsius');
            const f = document.getElementById('fahrenheit');
            c.addEventListener('input', () => f.value = (c.value !== "") ? ((c.value * 9/5) + 32).toFixed(2) : "");
            f.addEventListener('input', () => c.value = (f.value !== "") ? ((f.value - 32) * 5/9).toFixed(2) : "");
        }
    },

    // ==========================================
    // 3. FINANCE & BUSINESS
    // ==========================================

    'discount-calculator': {
        title: "Discount Calculator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-lg mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-6">Discount Calculator</h1>
                <input type="number" id="price" placeholder="Original Price (රු.)" class="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 text-lg">
                <input type="number" id="discount" placeholder="Discount Percentage (%)" class="w-full p-3 border-2 border-gray-300 rounded-lg mb-6 text-lg">
                <button id="calc-disc" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow mb-6">Calculate Final Price</button>
                <div id="disc-res" class="hidden bg-green-50 p-4 border border-green-200 rounded-lg">
                    <p class="text-gray-500">අවසාන මිල (Final Price):</p>
                    <h2 class="text-4xl font-black text-green-700" id="final-price">--</h2>
                    <p class="text-red-500 font-bold mt-2">ඔබට ඉතුරු වූ මුදල: රු. <span id="saved-amt">0</span></p>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-disc').addEventListener('click', () => {
                const p = parseFloat(document.getElementById('price').value);
                const d = parseFloat(document.getElementById('discount').value);
                if(!p || !d) return alert("කරුණාකර අගයන් ලබා දෙන්න!");
                const saved = (p * d) / 100;
                document.getElementById('final-price').innerText = "රු. " + (p - saved).toFixed(2);
                document.getElementById('saved-amt').innerText = saved.toFixed(2);
                document.getElementById('disc-res').classList.remove('hidden');
            });
        }
    },

    // ==========================================
    // 4. TEXT & SEO TOOLS
    // ==========================================

    'case-converter': {
        title: "Case Converter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy">
                <h1 class="text-3xl font-bold text-navy mb-4 text-center">Text Case Converter</h1>
                <textarea id="case-text" rows="5" class="w-full p-4 border-2 border-gray-300 rounded-lg outline-none mb-4" placeholder="Enter your text here..."></textarea>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button id="btn-upper" class="bg-gray-800 text-white font-bold py-2 rounded">UPPERCASE</button>
                    <button id="btn-lower" class="bg-gray-800 text-white font-bold py-2 rounded">lowercase</button>
                    <button id="btn-title" class="bg-gray-800 text-white font-bold py-2 rounded">Title Case</button>
                    <button id="btn-copy" class="bg-green-500 text-white font-bold py-2 rounded shadow">Copy Text</button>
                </div>
            </div>
        `,
        init: function() {
            const txt = document.getElementById('case-text');
            document.getElementById('btn-upper').addEventListener('click', () => txt.value = txt.value.toUpperCase());
            document.getElementById('btn-lower').addEventListener('click', () => txt.value = txt.value.toLowerCase());
            document.getElementById('btn-title').addEventListener('click', () => {
                txt.value = txt.value.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            });
            document.getElementById('btn-copy').addEventListener('click', () => { txt.select(); document.execCommand('copy'); alert('Copied!'); });
        }
    },

    'word-counter': {
        title: "Word & Character Counter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy">
                <h1 class="text-3xl font-bold text-navy mb-6 text-center">Word & Character Counter</h1>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                    <div class="bg-blue-50 p-4 rounded-lg"><div class="text-3xl font-black text-navy" id="word-count">0</div><div class="text-sm font-bold text-gray-500">Words</div></div>
                    <div class="bg-blue-50 p-4 rounded-lg"><div class="text-3xl font-black text-navy" id="char-count">0</div><div class="text-sm font-bold text-gray-500">Characters</div></div>
                    <div class="bg-green-50 p-4 rounded-lg"><div class="text-3xl font-black text-green-700" id="read-time">0m</div><div class="text-sm font-bold text-gray-500">Read Time</div></div>
                    <div class="bg-gray-100 p-4 rounded-lg"><div class="text-3xl font-black text-gray-700" id="space-count">0</div><div class="text-sm font-bold text-gray-500">Spaces</div></div>
                </div>
                <textarea id="text-input" rows="6" class="w-full p-4 border-2 border-gray-300 rounded-lg outline-none" placeholder="Type or Paste here..."></textarea>
            </div>
        `,
        init: function() {
            const input = document.getElementById('text-input');
            input.addEventListener('input', () => {
                const text = input.value;
                document.getElementById('char-count').innerText = text.length;
                const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
                document.getElementById('word-count').innerText = words;
                document.getElementById('space-count').innerText = text.split(" ").length - 1;
                document.getElementById('read-time').innerText = Math.ceil(words / 200) + "m";
            });
        }
    },

    // ==========================================
    // 5. DEVELOPER TOOLS
    // ==========================================

    'base64-converter': {
        title: "Base64 Encoder/Decoder | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy">
                <h1 class="text-3xl font-bold text-navy mb-4 text-center">Base64 Converter</h1>
                <textarea id="b64-input" rows="4" class="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 outline-none font-mono" placeholder="Enter text or Base64 code..."></textarea>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <button id="btn-enc" class="bg-navy text-white font-bold py-3 rounded">Encode</button>
                    <button id="btn-dec" class="bg-gray-700 text-white font-bold py-3 rounded">Decode</button>
                </div>
                <textarea id="b64-output" rows="4" class="w-full p-3 bg-gray-100 border-2 border-gray-300 rounded-lg outline-none font-mono" readonly></textarea>
            </div>
        `,
        init: function() {
            document.getElementById('btn-enc').addEventListener('click', () => {
                document.getElementById('b64-output').value = btoa(document.getElementById('b64-input').value);
            });
            document.getElementById('btn-dec').addEventListener('click', () => {
                try { document.getElementById('b64-output').value = atob(document.getElementById('b64-input').value); }
                catch(e) { alert("Invalid Base64 string!"); }
            });
        }
    },

    // ==========================================
    // 6. PRO TOOLS (Business & Security)
    // ==========================================

    'password-generator': {
        title: "Secure Pass Generator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-2xl mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-6 text-center">Secure Pass Generator</h1>
                <input type="text" id="pass-result" readonly class="w-full p-4 text-2xl font-mono text-center border-2 border-gray-300 rounded-lg bg-gray-50 mb-6">
                <div class="mb-4">
                    <label class="block font-bold text-gray-700 mb-2">Length: <span id="len-val">12</span></label>
                    <input type="range" id="pass-len" min="6" max="32" value="12" class="w-full cursor-pointer">
                </div>
                <div class="p-4 bg-yellow-50 border border-gold rounded-lg relative mb-6">
                    <div class="absolute top-0 right-0 bg-gold text-navy text-[10px] font-bold px-2 py-1 rounded-bl-lg">PRO</div>
                    <label class="flex items-center space-x-2 cursor-pointer font-bold text-gray-700">
                        <input type="checkbox" id="chk-bulk" class="w-5 h-5 accent-navy" onclick="alert('Bulk Generation is a PRO feature!')"> 
                        <span>එකවර මුරපද 10ක් සාදන්න (Bulk Generate)</span>
                    </label>
                </div>
                <button id="gen-btn" class="w-full bg-gold hover:bg-yellow-500 text-navy font-bold py-4 rounded-lg shadow">Generate Password</button>
            </div>
        `,
        init: function() {
            const slider = document.getElementById('pass-len');
            slider.addEventListener('input', () => document.getElementById('len-val').innerText = slider.value);
            document.getElementById('gen-btn').addEventListener('click', () => {
                const len = slider.value;
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
                let pass = "";
                for(let i=0; i<len; i++) pass += chars[Math.floor(Math.random() * chars.length)];
                document.getElementById('pass-result').value = pass;
            });
            document.getElementById('gen-btn').click();
        }
    },

    'qr-generator': {
        title: "Pro QR Generator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy">
                <h1 class="text-3xl font-bold text-navy mb-2 text-center">QR Code Generator</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label class="block font-bold text-gray-700 mb-2">Text හෝ Link එක:</label>
                        <textarea id="qr-text" rows="3" class="w-full p-3 border-2 border-gray-300 rounded-lg outline-none mb-4" placeholder="https://www.example.com"></textarea>
                        <div class="p-4 bg-yellow-50 border border-gold rounded-lg relative mb-4">
                            <div class="absolute top-0 right-0 bg-gold text-navy text-[10px] font-bold px-2 py-1 rounded-bl-lg">PRO</div>
                            <label class="block font-bold text-gray-700 mb-2 text-sm">QR වර්ණය (Custom Color):</label>
                            <input type="color" id="qr-color" value="#000000" class="w-full h-10 rounded cursor-pointer" onclick="alert('Upgrade to PRO to unlock colors!')">
                        </div>
                        <button id="qr-btn" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow">Generate QR</button>
                    </div>
                    <div class="flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <img id="qr-image" src="" class="hidden w-48 h-48 mb-4 shadow-sm">
                        <p id="qr-placeholder" class="text-gray-400 font-bold">QR කේතය මෙහි දිස්වේ</p>
                    </div>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('qr-btn').addEventListener('click', () => {
                const text = document.getElementById('qr-text').value;
                if(!text) return alert("Link එකක් ඇතුලත් කරන්න!");
                const color = document.getElementById('qr-color').value.replace('#', '');
                document.getElementById('qr-image').src = \`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=\${encodeURIComponent(text)}&color=\${color}\`;
                document.getElementById('qr-image').classList.remove('hidden');
                document.getElementById('qr-placeholder').classList.add('hidden');
            });
        }
    },

    'age-calculator': {
        title: "Age Calculator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-md mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-4">Age Calculator</h1>
                <input type="date" id="dob-input" class="w-full p-3 border-2 border-gray-300 rounded-lg outline-none mb-6 text-lg">
                <button id="calc-age" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow mb-6">Calculate Age</button>
                <div id="age-res" class="hidden bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 mt-4">
                    <div class="text-4xl font-black text-navy mb-2" id="age-main">--</div>
                    <div class="text-gray-600 font-bold" id="age-sub"></div>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-age').addEventListener('click', () => {
                const dobVal = document.getElementById('dob-input').value;
                if(!dobVal) return alert("උපන්දිනය තෝරන්න!");
                const dob = new Date(dobVal), today = new Date();
                let years = today.getFullYear() - dob.getFullYear();
                let months = today.getMonth() - dob.getMonth();
                let days = today.getDate() - dob.getDate();
                if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
                if (months < 0) { years--; months += 12; }
                document.getElementById('age-res').classList.remove('hidden');
                document.getElementById('age-main').innerText = \`\${years} Years Old\`;
                document.getElementById('age-sub').innerHTML = \`මාස: \${months} | දින: \${days}\`;
            });
        }
    }
};

// ==========================================
// MASTER LOADER LOGIC
// ==========================================

function loadTool() {
    const urlParams = new URLSearchParams(window.location.search);
    const appName = urlParams.get('app'); 
    const container = document.getElementById('app-container');

    if (appName && toolsRegistry[appName]) {
        const tool = toolsRegistry[appName];
        document.title = tool.title;
        container.innerHTML = tool.html;
        if (tool.init) tool.init();
    } else {
        container.innerHTML = \`<div class="text-center py-20"><h1 class="text-5xl text-red-500 font-bold mb-4">404</h1><h2 class="text-2xl text-gray-700 font-bold">Tool Not Found!</h2></div>\`;
    }
}
window.onload = loadTool;
