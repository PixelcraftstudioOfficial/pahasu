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

// ==========================================
    // 7. NEW BATCH (Academic, Health, Converters)
    // ==========================================

    'pregnancy-calculator': {
        title: "Pregnancy Due Date Calculator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-400 max-w-lg mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-2">Due Date Calculator</h1>
                <p class="text-gray-600 mb-6">ඔසප් වීම ආරම්භ වූ අවසන් දිනය (LMP) ලබා දී දරුවා ලැබෙන ආසන්න දිනය ගණනය කරන්න.</p>
                <div class="mb-6 text-left">
                    <label class="block font-bold text-gray-700 mb-2">අවසන් දිනය (First day of your last period):</label>
                    <input type="date" id="lmp-date" class="w-full p-3 border-2 border-gray-300 rounded-lg outline-none text-lg">
                </div>
                <button id="calc-preg" class="w-full bg-red-400 hover:bg-red-500 text-white font-bold py-3 rounded-lg shadow mb-6">Calculate Due Date</button>
                <div id="preg-result" class="hidden bg-red-50 p-6 rounded-lg border border-red-200">
                    <p class="text-gray-600 font-bold mb-2">දරුවා ලැබීමට නියමිත ආසන්න දිනය:</p>
                    <div class="text-3xl font-black text-red-600" id="due-date-val">--</div>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-preg').addEventListener('click', () => {
                const lmp = document.getElementById('lmp-date').value;
                if(!lmp) return alert("කරුණාකර දිනයක් තෝරන්න!");
                const date = new Date(lmp);
                date.setDate(date.getDate() + 280); // Adds 280 days (40 weeks)
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                document.getElementById('due-date-val').innerText = date.toLocaleDateString('si-LK', options);
                document.getElementById('preg-result').classList.remove('hidden');
            });
        }
    },

    'weight-converter': {
        title: "Weight & Mass Converter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-indigo-400 max-w-lg mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-6">Weight Converter</h1>
                <div class="flex gap-4 mb-4">
                    <input type="number" id="w-val" class="w-1/2 p-3 border-2 border-gray-300 rounded-lg outline-none" placeholder="Amount">
                    <select id="w-from" class="w-1/2 p-3 border-2 border-gray-300 rounded-lg outline-none">
                        <option value="1">Kilograms (kg)</option>
                        <option value="0.001">Grams (g)</option>
                        <option value="0.453592">Pounds (lb)</option>
                        <option value="0.0283495">Ounces (oz)</option>
                    </select>
                </div>
                <p class="font-bold text-gray-500 mb-4">To</p>
                <select id="w-to" class="w-full p-3 border-2 border-gray-300 rounded-lg outline-none mb-6">
                    <option value="0.453592">Pounds (lb)</option>
                    <option value="1">Kilograms (kg)</option>
                    <option value="0.001">Grams (g)</option>
                    <option value="0.0283495">Ounces (oz)</option>
                </select>
                <button id="calc-weight" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow mb-4">Convert</button>
                <div id="w-res" class="text-3xl font-black text-indigo-600 hidden mt-4"></div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-weight').addEventListener('click', () => {
                const val = parseFloat(document.getElementById('w-val').value);
                const from = parseFloat(document.getElementById('w-from').value);
                const to = parseFloat(document.getElementById('w-to').value);
                if(!val) return;
                const result = (val * from) / to;
                document.getElementById('w-res').innerText = result.toFixed(4);
                document.getElementById('w-res').classList.remove('hidden');
            });
        }
    },

    'percentage-calculator': {
        title: "Percentage Calculator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 max-w-lg mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-6 text-center">Percentage Calculator</h1>
                
                <div class="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
                    <p class="font-bold text-gray-700 mb-2">1. අගයක ප්‍රතිශතයක් සෙවීම:</p>
                    <div class="flex items-center gap-2">
                        <input type="number" id="p1-x" placeholder="%" class="w-20 p-2 border border-gray-300 rounded"> 
                        <span>of</span> 
                        <input type="number" id="p1-y" placeholder="Value" class="w-24 p-2 border border-gray-300 rounded">
                        <button id="calc-p1" class="bg-orange-500 text-white px-4 py-2 rounded font-bold">=</button>
                        <span id="res-p1" class="font-black text-xl text-navy ml-2">--</span>
                    </div>
                </div>

                <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p class="font-bold text-gray-700 mb-2">2. අගයක් තවත් අගයකින් කොපමණ % ද?:</p>
                    <div class="flex items-center gap-2">
                        <input type="number" id="p2-x" placeholder="Val 1" class="w-24 p-2 border border-gray-300 rounded"> 
                        <span>is what % of</span> 
                        <input type="number" id="p2-y" placeholder="Val 2" class="w-24 p-2 border border-gray-300 rounded">
                        <button id="calc-p2" class="bg-orange-500 text-white px-4 py-2 rounded font-bold">=</button>
                        <span id="res-p2" class="font-black text-xl text-navy ml-2">--</span>
                    </div>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-p1').addEventListener('click', () => {
                const x = parseFloat(document.getElementById('p1-x').value);
                const y = parseFloat(document.getElementById('p1-y').value);
                if(x && y) document.getElementById('res-p1').innerText = ((x / 100) * y).toFixed(2);
            });
            document.getElementById('calc-p2').addEventListener('click', () => {
                const x = parseFloat(document.getElementById('p2-x').value);
                const y = parseFloat(document.getElementById('p2-y').value);
                if(x && y) document.getElementById('res-p2').innerText = ((x / y) * 100).toFixed(2) + "%";
            });
        }
    },

    'url-encoder': {
        title: "URL Encoder / Decoder | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500">
                <h1 class="text-3xl font-bold text-navy mb-4 text-center">URL Encoder & Decoder</h1>
                <textarea id="url-input" rows="4" class="w-full p-4 border-2 border-gray-300 rounded-lg outline-none mb-4" placeholder="Enter URL or text here..."></textarea>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <button id="btn-url-enc" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded shadow">Encode URL</button>
                    <button id="btn-url-dec" class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 rounded shadow">Decode URL</button>
                </div>
                <textarea id="url-output" rows="4" class="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-lg outline-none" readonly placeholder="Result will appear here..."></textarea>
            </div>
        `,
        init: function() {
            const input = document.getElementById('url-input');
            const output = document.getElementById('url-output');
            document.getElementById('btn-url-enc').addEventListener('click', () => {
                output.value = encodeURIComponent(input.value);
            });
            document.getElementById('btn-url-dec').addEventListener('click', () => {
                try { output.value = decodeURIComponent(input.value); } 
                catch(e) { alert("Invalid URL encoded string!"); }
            });
        }
    },

    'slug-generator': {
        title: "Slug Generator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500 max-w-2xl mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-2 text-center">SEO Slug Generator</h1>
                <p class="text-gray-600 mb-6 text-center">බ්ලොග් පෝස්ට් වල මාතෘකාව URL එකකට ගැලපෙන පරිදි සකසා ගන්න.</p>
                <input type="text" id="slug-input" class="w-full p-4 border-2 border-gray-300 rounded-lg outline-none mb-4 text-lg" placeholder="Enter Post Title (e.g. My Awesome Post)">
                <div class="relative">
                    <input type="text" id="slug-output" class="w-full p-4 pr-24 bg-gray-100 border-2 border-gray-300 rounded-lg outline-none text-blue-600 font-bold font-mono" readonly>
                    <button id="slug-copy" class="absolute right-2 top-2 bg-navy hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition">Copy</button>
                </div>
            </div>
        `,
        init: function() {
            const input = document.getElementById('slug-input');
            const output = document.getElementById('slug-output');
            input.addEventListener('input', () => {
                output.value = input.value.toLowerCase().trim()
                    .replace(/[^\w\s-]/g, '') // Remove non-word chars
                    .replace(/[\s_-]+/g, '-') // Swap spaces for hyphens
                    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
            });
            document.getElementById('slug-copy').addEventListener('click', () => {
                output.select(); document.execCommand('copy'); alert('Slug Copied!');
            });
        }
    },

    'social-counter': {
        title: "Social Media Character Counter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-pink-500">
                <h1 class="text-3xl font-bold text-navy mb-6 text-center">Social Media Character Checker</h1>
                <div class="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div class="font-bold text-blue-600">Twitter (X)</div>
                        <div class="text-2xl font-black mt-2" id="tw-count">0 / 280</div>
                    </div>
                    <div class="bg-pink-50 p-4 rounded-lg border border-pink-200">
                        <div class="font-bold text-pink-600">Instagram</div>
                        <div class="text-2xl font-black mt-2" id="ig-count">0 / 2200</div>
                    </div>
                    <div class="bg-blue-100 p-4 rounded-lg border border-blue-300">
                        <div class="font-bold text-blue-800">Facebook</div>
                        <div class="text-2xl font-black mt-2" id="fb-count">0 / 63K</div>
                    </div>
                </div>
                <textarea id="social-text" rows="6" class="w-full p-4 border-2 border-gray-300 rounded-lg outline-none" placeholder="Type your post here..."></textarea>
            </div>
        `,
        init: function() {
            const txt = document.getElementById('social-text');
            txt.addEventListener('input', () => {
                const len = txt.value.length;
                
                const tw = document.getElementById('tw-count');
                tw.innerText = len + " / 280";
                tw.className = len > 280 ? "text-2xl font-black mt-2 text-red-500" : "text-2xl font-black mt-2 text-navy";

                const ig = document.getElementById('ig-count');
                ig.innerText = len + " / 2200";
                ig.className = len > 2200 ? "text-2xl font-black mt-2 text-red-500" : "text-2xl font-black mt-2 text-navy";
                
                document.getElementById('fb-count').innerText = len + " / 63K";
            });
        }
    },
// ==========================================
    // 8.1 ADVANCED PDF TOOLS
    // ==========================================

    'split-pdf': {
        title: "Split PDF Files | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600 max-w-2xl mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-2">Split PDF</h1>
                <p class="text-gray-600 mb-6">විශාල PDF ගොනුවකින් ඔබට අවශ්‍ය පිටු (Pages) පමණක් වෙන්කර ලබාගන්න.</p>
                
                <div class="border-4 border-dashed border-gray-300 rounded-xl p-8 mb-6 bg-gray-50">
                    <input type="file" id="split-upload" accept=".pdf" class="hidden">
                    <label for="split-upload" class="cursor-pointer bg-navy hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow">
                        Select PDF File
                    </label>
                    <p class="text-sm text-gray-500 mt-4" id="split-file-name">කිසිදු ගොනුවක් තෝරා නැත</p>
                </div>

                <div id="split-options" class="hidden mb-6 text-left bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p class="font-bold text-navy mb-2">ඔබට අවශ්‍ය පිටු සීමාව ලබා දෙන්න:</p>
                    <div class="flex items-center gap-4">
                        <div>
                            <label class="text-sm text-gray-600 font-bold">Start Page:</label>
                            <input type="number" id="page-start" min="1" value="1" class="w-full p-2 border-2 border-gray-300 rounded outline-none">
                        </div>
                        <div>
                            <label class="text-sm text-gray-600 font-bold">End Page:</label>
                            <input type="number" id="page-end" min="1" class="w-full p-2 border-2 border-gray-300 rounded outline-none">
                        </div>
                    </div>
                    <p class="text-xs text-red-500 mt-2 font-bold" id="total-pages-info"></p>
                </div>

                <button id="btn-split" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow mb-4 hidden">Extract Pages</button>
                
                <div id="split-result" class="hidden p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p class="text-green-700 font-bold mb-2">සාර්ථකයි! ඔබගේ නව PDF ගොනුව සූදානම්.</p>
                    <a id="download-split" href="#" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow">Download Extracted PDF</a>
                </div>
            </div>
        `,
        init: function() {
            let selectedFile = null;
            let totalPages = 0;

            document.getElementById('split-upload').addEventListener('change', async (e) => {
                selectedFile = e.target.files[0];
                if (selectedFile) {
                    document.getElementById('split-file-name').innerText = selectedFile.name;
                    
                    // Load PDF to get total pages
                    const arrayBuffer = await selectedFile.arrayBuffer();
                    const { PDFDocument } = window.PDFLib;
                    const pdf = await PDFDocument.load(arrayBuffer);
                    totalPages = pdf.getPageCount();

                    document.getElementById('page-end').value = totalPages;
                    document.getElementById('total-pages-info').innerText = \`මෙම ගොනුවේ මුළු පිටු ගණන: \${totalPages}\`;
                    
                    document.getElementById('split-options').classList.remove('hidden');
                    document.getElementById('btn-split').classList.remove('hidden');
                    document.getElementById('split-result').classList.add('hidden');
                }
            });

            document.getElementById('btn-split').addEventListener('click', async () => {
                const start = parseInt(document.getElementById('page-start').value);
                const end = parseInt(document.getElementById('page-end').value);
                
                if(start < 1 || end > totalPages || start > end) {
                    return alert("කරුණාකර නිවැරදි පිටු සීමාවක් ලබා දෙන්න!");
                }

                const btn = document.getElementById('btn-split');
                btn.innerText = "Extracting... Please wait";
                btn.disabled = true;

                try {
                    const arrayBuffer = await selectedFile.arrayBuffer();
                    const { PDFDocument } = window.PDFLib;
                    const originalPdf = await PDFDocument.load(arrayBuffer);
                    const newPdf = await PDFDocument.create();

                    // Pages are 0-indexed in pdf-lib
                    const pagesToExtract = [];
                    for(let i = start - 1; i <= end - 1; i++) { pagesToExtract.push(i); }

                    const copiedPages = await newPdf.copyPages(originalPdf, pagesToExtract);
                    copiedPages.forEach((page) => newPdf.addPage(page));

                    const pdfBytes = await newPdf.save();
                    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                    const url = URL.createObjectURL(blob);

                    const downloadLink = document.getElementById('download-split');
                    downloadLink.href = url;
                    downloadLink.download = \`Pahasu_Split_Pages_\${start}-\${end}.pdf\`;
                    
                    document.getElementById('split-result').classList.remove('hidden');
                    btn.innerText = "Extract Pages";
                    btn.disabled = false;
                } catch (error) {
                    alert("Error splitting PDF.");
                    btn.innerText = "Extract Pages";
                    btn.disabled = false;
                }
            });
        }
    },

    'pdf-compressor': {
        title: "PDF Compressor | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600 max-w-2xl mx-auto text-center relative overflow-hidden">
                <div class="absolute top-4 right-[-35px] bg-gold text-navy font-bold py-1 px-10 transform rotate-45 text-sm shadow-md">PRO</div>
                <h1 class="text-3xl font-bold text-navy mb-2">PDF Compressor</h1>
                <p class="text-gray-600 mb-6">ඊමේල් හරහා යැවීමට පහසු වන පරිදි PDF ගොනු වල සයිස් එක අඩු කරන්න.</p>
                
                <div class="border-4 border-dashed border-gray-300 rounded-xl p-8 mb-6 bg-gray-50 opacity-70">
                    <button class="bg-gray-400 text-white font-bold py-3 px-6 rounded-lg shadow cursor-not-allowed">
                        Select PDF File
                    </button>
                    <p class="text-sm text-gray-500 mt-4">Max file size: 50MB</p>
                </div>
                
                <div class="bg-yellow-50 border border-gold p-4 rounded-lg">
                    <h3 class="font-bold text-navy text-lg mb-2">⚠️ Server Upgrade Required</h3>
                    <p class="text-sm text-gray-700">මෙම මෙවලම සඳහා Cloud Server Processing අවශ්‍ය වේ. මෙම පහසුකම ළඟදීම අපගේ PRO පරිශීලකයින් සඳහා විවෘත වනු ඇත!</p>
                </div>
            </div>
        `,
        init: function() { /* UI Only */ }
    },

    'pdf-to-word': {
        title: "PDF to Word Converter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 max-w-2xl mx-auto text-center relative overflow-hidden">
                <div class="absolute top-4 right-[-35px] bg-gold text-navy font-bold py-1 px-10 transform rotate-45 text-sm shadow-md">PRO</div>
                <h1 class="text-3xl font-bold text-blue-600 mb-2">PDF to Word</h1>
                <p class="text-gray-600 mb-6">PDF ලියවිලි නැවත එඩිට් කළ හැකි Microsoft Word (.docx) ෆෝමැට් එකට හරවන්න.</p>
                
                <div class="border-4 border-dashed border-gray-300 rounded-xl p-8 mb-6 bg-gray-50 opacity-70">
                    <button class="bg-gray-400 text-white font-bold py-3 px-6 rounded-lg shadow cursor-not-allowed">
                        Select PDF File
                    </button>
                    <p class="text-sm text-gray-500 mt-4">OCR (Text Recognition) Supported</p>
                </div>
                
                <div class="bg-yellow-50 border border-gold p-4 rounded-lg">
                    <h3 class="font-bold text-navy text-lg mb-2">⚠️ PRO Feature Coming Soon</h3>
                    <p class="text-sm text-gray-700">මෙය Advanced AI තාක්ෂණය භාවිතා කරන මෙවලමකි. ළඟදීම Pahasu PRO හරහා ඔබට මෙය භාවිතා කළ හැක.</p>
                </div>
            </div>
        `,
        init: function() { /* UI Only */ }
    },
