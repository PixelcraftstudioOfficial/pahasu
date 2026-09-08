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
                    <input type="number" id="bmi-weight" placeholder="e.g. 65" class="w-full p-3 border-2 border-gray-300 rounded-lg outline-none text-lg">
                </div>
                <div class="mb-6 text-left">
                    <label class="block font-bold text-gray-700 mb-2">උස (Height in CM):</label>
                    <input type="number" id="bmi-height" placeholder="e.g. 170" class="w-full p-3 border-2 border-gray-300 rounded-lg outline-none text-lg">
                </div>
                <button id="calc-bmi" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow text-lg mb-6">Calculate BMI</button>
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

    'calorie-calculator': {
        title: "Daily Calorie Calculator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-lg mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-6 text-center">Calorie Calculator (BMR)</h1>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block font-bold text-gray-700 mb-1">වයස:</label>
                        <input type="number" id="cal-age" class="w-full p-3 border-2 border-gray-300 rounded-lg">
                    </div>
                    <div>
                        <label class="block font-bold text-gray-700 mb-1">ස්ත්‍රී/පුරුෂ:</label>
                        <select id="cal-gender" class="w-full p-3 border-2 border-gray-300 rounded-lg">
                            <option value="m">Male</option><option value="f">Female</option>
                        </select>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label class="block font-bold text-gray-700 mb-1">උස (CM):</label>
                        <input type="number" id="cal-height" class="w-full p-3 border-2 border-gray-300 rounded-lg">
                    </div>
                    <div>
                        <label class="block font-bold text-gray-700 mb-1">බර (KG):</label>
                        <input type="number" id="cal-weight" class="w-full p-3 border-2 border-gray-300 rounded-lg">
                    </div>
                </div>
                <button id="calc-cal" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow mb-4">Calculate Calories</button>
                <div id="cal-result" class="hidden text-center bg-orange-50 p-4 border border-orange-200 rounded-lg">
                    <p class="text-gray-600">දිනකට අවශ්‍ය කැලරි ප්‍රමාණය:</p>
                    <div class="text-4xl font-black text-orange-600" id="cal-value">--</div>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-cal').addEventListener('click', () => {
                const a = parseFloat(document.getElementById('cal-age').value);
                const h = parseFloat(document.getElementById('cal-height').value);
                const w = parseFloat(document.getElementById('cal-weight').value);
                const g = document.getElementById('cal-gender').value;
                if(!a || !h || !w) return alert("සියලුම දත්ත ලබා දෙන්න!");
                
                // Mifflin-St Jeor Equation
                let bmr = (10 * w) + (6.25 * h) - (5 * a);
                bmr = (g === 'm') ? bmr + 5 : bmr - 161;
                
                document.getElementById('cal-value').innerText = Math.round(bmr) + " kcal";
                document.getElementById('cal-result').classList.remove('hidden');
            });
        }
    },

    // ==========================================
    // 2. UNIT CONVERTERS
    // ==========================================

    'length-converter': {
        title: "Length & Distance Converter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-lg mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-6">Length Converter</h1>
                <div class="flex gap-4 mb-4">
                    <input type="number" id="len-val" class="w-1/2 p-3 border-2 border-gray-300 rounded-lg" placeholder="Amount">
                    <select id="len-from" class="w-1/2 p-3 border-2 border-gray-300 rounded-lg">
                        <option value="1">Meters (m)</option>
                        <option value="1000">Kilometers (km)</option>
                        <option value="0.3048">Feet (ft)</option>
                        <option value="0.0254">Inches (in)</option>
                        <option value="1609.34">Miles (mi)</option>
                    </select>
                </div>
                <p class="font-bold text-gray-500 mb-4">To</p>
                <select id="len-to" class="w-full p-3 border-2 border-gray-300 rounded-lg mb-6">
                    <option value="0.3048">Feet (ft)</option>
                    <option value="1">Meters (m)</option>
                    <option value="1000">Kilometers (km)</option>
                    <option value="0.0254">Inches (in)</option>
                    <option value="1609.34">Miles (mi)</option>
                </select>
                <button id="calc-len" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow mb-4">Convert</button>
                <div id="len-res" class="text-3xl font-black text-blue-600 hidden"></div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-len').addEventListener('click', () => {
                const val = parseFloat(document.getElementById('len-val').value);
                const from = parseFloat(document.getElementById('len-from').value);
                const to = parseFloat(document.getElementById('len-to').value);
                if(!val) return;
                
                // Convert to meters first, then to target
                const inMeters = val * from;
                const result = inMeters / to;
                
                document.getElementById('len-res').innerText = result.toFixed(4);
                document.getElementById('len-res').classList.remove('hidden');
            });
        }
    },

    // ==========================================
    // 3. SOCIAL MEDIA TOOLS
    // ==========================================

    'hashtag-generator': {
        title: "Hashtag Generator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-2xl mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-2 text-center">Hashtag Generator</h1>
                <p class="text-gray-600 mb-6 text-center">ඔබේ පෝස්ට් එකේ මාතෘකාව දීලා Hashtags සාදාගන්න.</p>
                <input type="text" id="hash-topic" class="w-full p-4 border-2 border-gray-300 rounded-lg mb-4" placeholder="e.g. Travel Sri Lanka, Web Design...">
                <button id="gen-hash" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow mb-6">Generate Tags</button>
                <textarea id="hash-result" rows="4" class="w-full p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg outline-none text-blue-600 font-bold" readonly placeholder="#Tags will appear here..."></textarea>
            </div>
        `,
        init: function() {
            document.getElementById('gen-hash').addEventListener('click', () => {
                const topic = document.getElementById('hash-topic').value;
                if(!topic) return alert("කරුණාකර මාතෘකාවක් ලබා දෙන්න!");
                const words = topic.split(' ').map(w => w.replace(/[^a-zA-Z0-9]/g, ''));
                const tags = words.filter(w => w.length > 0).map(w => '#' + w);
                const extra = ['#trending', '#viral', '#pahasu', '#foryou', '#srilanka'];
                document.getElementById('hash-result').value = [...tags, ...extra].join(' ');
            });
        }
    },

    // ==========================================
    // 4. DEVELOPER TOOLS
    // ==========================================

    'json-beautifier': {
        title: "JSON Beautifier | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy">
                <h1 class="text-3xl font-bold text-navy mb-4 text-center">JSON Beautifier & Validator</h1>
                <textarea id="json-input" rows="6" class="w-full p-3 border-2 border-gray-300 rounded-lg font-mono text-sm mb-4" placeholder='{"name":"John", "age":30}'></textarea>
                <button id="btn-format" class="w-full bg-navy text-white font-bold py-3 rounded shadow mb-4">Format JSON</button>
                <div id="json-error" class="hidden bg-red-100 text-red-700 p-3 rounded mb-4 font-bold"></div>
                <textarea id="json-output" rows="8" class="w-full p-3 bg-gray-800 text-green-400 rounded-lg font-mono text-sm outline-none" readonly></textarea>
            </div>
        `,
        init: function() {
            document.getElementById('btn-format').addEventListener('click', () => {
                const input = document.getElementById('json-input').value;
                const errBox = document.getElementById('json-error');
                try {
                    const parsed = JSON.parse(input);
                    document.getElementById('json-output').value = JSON.stringify(parsed, null, 4);
                    errBox.classList.add('hidden');
                } catch(e) {
                    errBox.innerText = "Invalid JSON: " + e.message;
                    errBox.classList.remove('hidden');
                    document.getElementById('json-output').value = "";
                }
            });
        }
    },

    // ==========================================
    // 5. FINANCE & BUSINESS
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

    'loan-calculator': {
        title: "Loan / Mortgage Calculator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-lg mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-6 text-center">Loan Calculator</h1>
                <div class="mb-4">
                    <label class="block font-bold text-gray-700 mb-1">ණය මුදල (Loan Amount):</label>
                    <input type="number" id="loan-amt" class="w-full p-3 border-2 border-gray-300 rounded-lg">
                </div>
                <div class="mb-4">
                    <label class="block font-bold text-gray-700 mb-1">වාර්ෂික පොලිය (Interest Rate %):</label>
                    <input type="number" id="loan-rate" class="w-full p-3 border-2 border-gray-300 rounded-lg">
                </div>
                <div class="mb-6">
                    <label class="block font-bold text-gray-700 mb-1">කාලය (Months):</label>
                    <input type="number" id="loan-months" class="w-full p-3 border-2 border-gray-300 rounded-lg">
                </div>
                <button id="calc-loan" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow mb-6">Calculate EMI</button>
                <div id="loan-res" class="hidden text-center bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                    <p class="text-gray-500 font-bold mb-2">මාසික වාරිකය (Monthly EMI):</p>
                    <div class="text-4xl font-black text-navy mb-4" id="emi-val">--</div>
                    <p class="text-sm text-gray-600">මුළු ගෙවීම: <span id="total-pay" class="font-bold"></span></p>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-loan').addEventListener('click', () => {
                const p = parseFloat(document.getElementById('loan-amt').value);
                const r = parseFloat(document.getElementById('loan-rate').value) / 100 / 12;
                const n = parseFloat(document.getElementById('loan-months').value);
                if(!p || !r || !n) return alert("දත්ත ඇතුලත් කරන්න!");
                
                const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
                const total = emi * n;
                
                document.getElementById('emi-val').innerText = "රු. " + emi.toFixed(2);
                document.getElementById('total-pay').innerText = "රු. " + total.toFixed(2);
                document.getElementById('loan-res').classList.remove('hidden');
            });
        }
    },

    // ==========================================
    // 6. TEXT & CONTENT TOOLS
    // ==========================================

    'lorem-generator': {
        title: "Lorem Ipsum Generator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-2xl mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-4">Lorem Ipsum Generator</h1>
                <div class="flex items-center justify-center gap-4 mb-6">
                    <label class="font-bold text-gray-700">Paragraphs:</label>
                    <input type="number" id="lorem-count" value="3" min="1" max="10" class="w-20 p-2 border-2 border-gray-300 rounded text-center">
                    <button id="gen-lorem" class="bg-navy hover:bg-blue-900 text-white font-bold py-2 px-6 rounded shadow">Generate</button>
                </div>
                <textarea id="lorem-out" rows="8" class="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-lg outline-none mb-4" readonly></textarea>
            </div>
        `,
        init: function() {
            const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            
            document.getElementById('gen-lorem').addEventListener('click', () => {
                const count = parseInt(document.getElementById('lorem-count').value);
                let result = [];
                for(let i=0; i<count; i++) result.push(loremText);
                document.getElementById('lorem-out').value = result.join('\n\n');
            });
            document.getElementById('gen-lorem').click();
        }
    },
    
    // (Previously Done Tools to keep them working)
    'password-generator': { /* (PRO Password Generator Logic Here - Same as previous code) */ },
    'qr-generator': { /* (PRO QR Generator Logic Here - Same as previous code) */ },
    'word-counter': { /* (Word Counter Logic Here - Same as previous code) */ },
    'age-calculator': { /* (Age Calculator Logic Here - Same as previous code) */ }
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
        container.innerHTML = \`<div class="text-center py-20"><h1 class="text-5xl text-red-500 font-bold mb-4">404</h1><h2 class="text-2xl text-gray-700 font-bold">Tool Development in Progress...</h2><p class="mt-4 text-gray-500">මෙම මෙවලම ඉක්මනින්ම එකතු වනු ඇත.</p></div>\`;
    }
}
window.onload = loadTool;
