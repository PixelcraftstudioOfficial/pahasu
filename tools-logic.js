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
                let bmr = (10 * w) + (6.25 * h) - (5 * a);
                bmr = (g === 'm') ? bmr + 5 : bmr - 161;
                document.getElementById('cal-value').innerText = Math.round(bmr) + " kcal";
                document.getElementById('cal-result').classList.remove('hidden');
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
                date.setDate(date.getDate() + 280); 
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                document.getElementById('due-date-val').innerText = date.toLocaleDateString('si-LK', options);
                document.getElementById('preg-result').classList.remove('hidden');
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
                        <option value="1">Meters (m)</option><option value="1000">Kilometers (km)</option>
                        <option value="0.3048">Feet (ft)</option><option value="0.0254">Inches (in)</option>
                        <option value="1609.34">Miles (mi)</option>
                    </select>
                </div>
                <p class="font-bold text-gray-500 mb-4">To</p>
                <select id="len-to" class="w-full p-3 border-2 border-gray-300 rounded-lg mb-6">
                    <option value="0.3048">Feet (ft)</option><option value="1">Meters (m)</option>
                    <option value="1000">Kilometers (km)</option><option value="0.0254">Inches (in)</option>
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
                document.getElementById('len-res').innerText = ((val * from) / to).toFixed(4);
                document.getElementById('len-res').classList.remove('hidden');
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
                        <option value="1">Kilograms (kg)</option><option value="0.001">Grams (g)</option>
                        <option value="0.453592">Pounds (lb)</option><option value="0.0283495">Ounces (oz)</option>
                    </select>
                </div>
                <p class="font-bold text-gray-500 mb-4">To</p>
                <select id="w-to" class="w-full p-3 border-2 border-gray-300 rounded-lg outline-none mb-6">
                    <option value="0.453592">Pounds (lb)</option><option value="1">Kilograms (kg)</option>
                    <option value="0.001">Grams (g)</option><option value="0.0283495">Ounces (oz)</option>
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
                document.getElementById('w-res').innerText = ((val * from) / to).toFixed(4);
                document.getElementById('w-res').classList.remove('hidden');
            });
        }
    },

    'temp-converter': {
        title: "Temperature Converter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy max-w-lg mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-6 text-center">Temperature Converter</h1>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div><label class="block font-bold text-gray-700 mb-1">Celsius (°C)</label>
                    <input type="number" id="celsius" class="w-full p-3 border-2 border-gray-300 rounded-lg"></div>
                    <div><label class="block font-bold text-gray-700 mb-1">Fahrenheit (°F)</label>
                    <input type="number" id="fahrenheit" class="w-full p-3 border-2 border-gray-300 rounded-lg"></div>
                </div>
            </div>
        `,
        init: function() {
            const c = document.getElementById('celsius'), f = document.getElementById('fahrenheit');
            c.addEventListener('input', () => f.value = (c.value !== "") ? ((c.value * 9/5) + 32).toFixed(2) : "");
            f.addEventListener('input', () => c.value = (f.value !== "") ? ((f.value - 32) * 5/9).toFixed(2) : "");
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
                <input type="text" id="hash-topic" class="w-full p-4 border-2 border-gray-300 rounded-lg mb-4" placeholder="e.g. Travel Sri Lanka...">
                <button id="gen-hash" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow mb-6">Generate Tags</button>
                <textarea id="hash-result" rows="4" class="w-full p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg outline-none text-blue-600 font-bold" readonly></textarea>
            </div>
        `,
        init: function() {
            document.getElementById('gen-hash').addEventListener('click', () => {
                const topic = document.getElementById('hash-topic').value;
                if(!topic) return alert("කරුණාකර මාතෘකාවක් ලබා දෙන්න!");
                const words = topic.split(' ').map(w => w.replace(/[^a-zA-Z0-9]/g, ''));
                const tags = words.filter(w => w.length > 0).map(w => '#' + w);
                const extra = ['#trending', '#viral', '#pahasu', '#srilanka'];
                document.getElementById('hash-result').value = [...tags, ...extra].join(' ');
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
                tw.innerText = len + " / 280"; tw.className = len > 280 ? "text-2xl font-black mt-2 text-red-500" : "text-2xl font-black mt-2 text-navy";
                const ig = document.getElementById('ig-count');
                ig.innerText = len + " / 2200"; ig.className = len > 2200 ? "text-2xl font-black mt-2 text-red-500" : "text-2xl font-black mt-2 text-navy";
                document.getElementById('fb-count').innerText = len + " / 63K";
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
                    errBox.classList.remove('hidden'); document.getElementById('json-output').value = "";
                }
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
                <textarea id="url-output" rows="4" class="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-lg outline-none" readonly></textarea>
            </div>
        `,
        init: function() {
            const input = document.getElementById('url-input'), output = document.getElementById('url-output');
            document.getElementById('btn-url-enc').addEventListener('click', () => output.value = encodeURIComponent(input.value));
            document.getElementById('btn-url-dec').addEventListener('click', () => {
                try { output.value = decodeURIComponent(input.value); } catch(e) { alert("Invalid URL string!"); }
            });
        }
    },

    'base64-converter': {
        title: "Base64 Encoder | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy">
                <h1 class="text-3xl font-bold text-navy mb-4 text-center">Base64 Converter</h1>
                <textarea id="b64-input" rows="4" class="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 outline-none font-mono"></textarea>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <button id="btn-enc" class="bg-navy text-white font-bold py-3 rounded">Encode</button>
                    <button id="btn-dec" class="bg-gray-700 text-white font-bold py-3 rounded">Decode</button>
                </div>
                <textarea id="b64-output" rows="4" class="w-full p-3 bg-gray-100 border-2 border-gray-300 rounded-lg outline-none font-mono" readonly></textarea>
            </div>
        `,
        init: function() {
            document.getElementById('btn-enc').addEventListener('click', () => document.getElementById('b64-output').value = btoa(document.getElementById('b64-input').value));
            document.getElementById('btn-dec').addEventListener('click', () => {
                try { document.getElementById('b64-output').value = atob(document.getElementById('b64-input').value); } catch(e) { alert("Invalid Base64!"); }
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
                if(!p || !d) return alert("අගයන් ලබා දෙන්න!");
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
                <div class="mb-4"><label class="block font-bold text-gray-700 mb-1">ණය මුදල:</label>
                <input type="number" id="loan-amt" class="w-full p-3 border-2 border-gray-300 rounded-lg"></div>
                <div class="mb-4"><label class="block font-bold text-gray-700 mb-1">වාර්ෂික පොලිය (%):</label>
                <input type="number" id="loan-rate" class="w-full p-3 border-2 border-gray-300 rounded-lg"></div>
                <div class="mb-6"><label class="block font-bold text-gray-700 mb-1">කාලය (Months):</label>
                <input type="number" id="loan-months" class="w-full p-3 border-2 border-gray-300 rounded-lg"></div>
                <button id="calc-loan" class="w-full bg-navy hover:bg-blue-900 text-white font-bold py-3 rounded-lg shadow mb-6">Calculate EMI</button>
                <div id="loan-res" class="hidden text-center bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                    <p class="text-gray-500 font-bold mb-2">මාසික වාරිකය:</p>
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
                document.getElementById('emi-val').innerText = "රු. " + emi.toFixed(2);
                document.getElementById('total-pay').innerText = "රු. " + (emi * n).toFixed(2);
                document.getElementById('loan-res').classList.remove('hidden');
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
                        <input type="number" id="p1-x" placeholder="%" class="w-20 p-2 border border-gray-300 rounded"> <span>of</span> 
                        <input type="number" id="p1-y" placeholder="Value" class="w-24 p-2 border border-gray-300 rounded">
                        <button id="calc-p1" class="bg-orange-500 text-white px-4 py-2 rounded font-bold">=</button><span id="res-p1" class="font-black text-xl text-navy ml-2">--</span>
                    </div>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p class="font-bold text-gray-700 mb-2">2. අගයක් තවත් අගයකින් කොපමණ % ද?:</p>
                    <div class="flex items-center gap-2">
                        <input type="number" id="p2-x" placeholder="Val 1" class="w-24 p-2 border border-gray-300 rounded"> <span>is what % of</span> 
                        <input type="number" id="p2-y" placeholder="Val 2" class="w-24 p-2 border border-gray-300 rounded">
                        <button id="calc-p2" class="bg-orange-500 text-white px-4 py-2 rounded font-bold">=</button><span id="res-p2" class="font-black text-xl text-navy ml-2">--</span>
                    </div>
                </div>
            </div>
        `,
        init: function() {
            document.getElementById('calc-p1').addEventListener('click', () => {
                const x = parseFloat(document.getElementById('p1-x').value), y = parseFloat(document.getElementById('p1-y').value);
                if(x && y) document.getElementById('res-p1').innerText = ((x / 100) * y).toFixed(2);
            });
            document.getElementById('calc-p2').addEventListener('click', () => {
                const x = parseFloat(document.getElementById('p2-x').value), y = parseFloat(document.getElementById('p2-y').value);
                if(x && y) document.getElementById('res-p2').innerText = ((x / y) * 100).toFixed(2) + "%";
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
                let result = []; for(let i=0; i<count; i++) result.push(loremText);
                document.getElementById('lorem-out').value = result.join('\n\n');
            });
            document.getElementById('gen-lorem').click();
        }
    },

    'slug-generator': {
        title: "Slug Generator | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500 max-w-2xl mx-auto">
                <h1 class="text-3xl font-bold text-navy mb-2 text-center">SEO Slug Generator</h1>
                <input type="text" id="slug-input" class="w-full p-4 border-2 border-gray-300 rounded-lg outline-none mb-4 text-lg" placeholder="Enter Post Title">
                <div class="relative">
                    <input type="text" id="slug-output" class="w-full p-4 pr-24 bg-gray-100 border-2 border-gray-300 rounded-lg font-mono" readonly>
                    <button id="slug-copy" class="absolute right-2 top-2 bg-navy hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Copy</button>
                </div>
            </div>
        `,
        init: function() {
            const input = document.getElementById('slug-input'), output = document.getElementById('slug-output');
            input.addEventListener('input', () => {
                output.value = input.value.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
            });
            document.getElementById('slug-copy').addEventListener('click', () => { output.select(); document.execCommand('copy'); alert('Copied!'); });
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

    'case-converter': {
        title: "Case Converter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-navy">
                <h1 class="text-3xl font-bold text-navy mb-4 text-center">Text Case Converter</h1>
                <textarea id="case-text" rows="5" class="w-full p-4 border-2 border-gray-300 rounded-lg outline-none mb-4"></textarea>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button id="btn-upper" class="bg-gray-800 text-white font-bold py-2 rounded">UPPERCASE</button>
                    <button id="btn-lower" class="bg-gray-800 text-white font-bold py-2 rounded">lowercase</button>
                    <button id="btn-title" class="bg-gray-800 text-white font-bold py-2 rounded">Title Case</button>
                    <button id="btn-copy" class="bg-green-500 text-white font-bold py-2 rounded">Copy</button>
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
                        <input type="checkbox" class="w-5 h-5 accent-navy" onclick="alert('Bulk Generation is a PRO feature!')"> 
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
                const len = slider.value, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
                let pass = ""; for(let i=0; i<len; i++) pass += chars[Math.floor(Math.random() * chars.length)];
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
                        <textarea id="qr-text" rows="3" class="w-full p-3 border-2 border-gray-300 rounded-lg outline-none mb-4" placeholder="URL or Text"></textarea>
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
                document.getElementById('qr-image').src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}&color=${color}`;
                document.getElementById('qr-image').classList.remove('hidden'); document.getElementById('qr-placeholder').classList.add('hidden');
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
                let years = today.getFullYear() - dob.getFullYear(), months = today.getMonth() - dob.getMonth(), days = today.getDate() - dob.getDate();
                if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
                if (months < 0) { years--; months += 12; }
                document.getElementById('age-res').classList.remove('hidden');
                document.getElementById('age-main').innerText = `${years} Years Old`;
                document.getElementById('age-sub').innerHTML = `මාස: ${months} | දින: ${days}`;
            });
        }
    },

    // ==========================================
    // 7. PDF TOOLS (Requires pdf-lib.js & pdf.js)
    // ==========================================

    'merge-pdf': {
        title: "Merge PDF Files | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600 max-w-2xl mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-2">Merge PDF Files</h1>
                <div class="border-4 border-dashed border-gray-300 rounded-xl p-8 mb-6 bg-gray-50">
                    <input type="file" id="pdf-upload" multiple accept=".pdf" class="hidden">
                    <label for="pdf-upload" class="cursor-pointer bg-navy hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow">Select PDF Files</label>
                    <p class="text-sm text-gray-500 mt-4" id="file-count">කිසිදු ගොනුවක් තෝරා නැත</p>
                </div>
                <button id="btn-merge" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow mb-4 hidden">Merge PDFs Now</button>
                <div id="merge-result" class="hidden p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p class="text-green-700 font-bold mb-2">සාර්ථකයි! නව PDF ගොනුව සූදානම්.</p>
                    <a id="download-merged" href="#" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow">Download Merged PDF</a>
                </div>
            </div>
        `,
        init: function() {
            let selectedFiles = [];
            document.getElementById('pdf-upload').addEventListener('change', (e) => {
                selectedFiles = Array.from(e.target.files);
                if (selectedFiles.length > 0) {
                    document.getElementById('file-count').innerText = `ගොනු ${selectedFiles.length} ක් තෝරාගෙන ඇත`;
                    document.getElementById('btn-merge').classList.remove('hidden'); document.getElementById('merge-result').classList.add('hidden');
                }
            });
            document.getElementById('btn-merge').addEventListener('click', async () => {
                if(selectedFiles.length < 2) return alert("අවම වශයෙන් PDF 2ක් වත් තෝරන්න!");
                const btn = document.getElementById('btn-merge');
                btn.innerText = "Merging... Please wait"; btn.disabled = true;
                try {
                    const { PDFDocument } = window.PDFLib;
                    const mergedPdf = await PDFDocument.create();
                    for (const file of selectedFiles) {
                        const arrayBuffer = await file.arrayBuffer();
                        const pdf = await PDFDocument.load(arrayBuffer);
                        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                        copiedPages.forEach((page) => mergedPdf.addPage(page));
                    }
                    const pdfBytes = await mergedPdf.save();
                    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                    const downloadLink = document.getElementById('download-merged');
                    downloadLink.href = URL.createObjectURL(blob); downloadLink.download = "Pahasu_Merged.pdf";
                    document.getElementById('merge-result').classList.remove('hidden');
                    btn.innerText = "Merge PDFs Now"; btn.disabled = false;
                } catch (error) { alert("Error merging PDFs."); btn.innerText = "Merge PDFs Now"; btn.disabled = false; }
            });
        }
    },

    'images-to-pdf': {
        title: "Images to PDF Converter | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600 max-w-2xl mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-2">Images to PDF</h1>
                <div class="border-4 border-dashed border-gray-300 rounded-xl p-8 mb-6 bg-gray-50">
                    <input type="file" id="img-upload" multiple accept="image/png, image/jpeg" class="hidden">
                    <label for="img-upload" class="cursor-pointer bg-navy hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow">Select Images</label>
                    <p class="text-sm text-gray-500 mt-4" id="img-count">කිසිදු පින්තූරයක් තෝරා නැත</p>
                </div>
                <button id="btn-img-pdf" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow mb-4 hidden">Convert to PDF</button>
                <div id="img-pdf-result" class="hidden p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p class="text-green-700 font-bold mb-2">සාර්ථකයි! PDF ගොනුව සූදානම්.</p>
                    <a id="download-img-pdf" href="#" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow">Download PDF</a>
                </div>
            </div>
        `,
        init: function() {
            let selectedImages = [];
            document.getElementById('img-upload').addEventListener('change', (e) => {
                selectedImages = Array.from(e.target.files);
                if (selectedImages.length > 0) {
                    document.getElementById('img-count').innerText = `පින්තූර ${selectedImages.length} ක් තෝරාගෙන ඇත`;
                    document.getElementById('btn-img-pdf').classList.remove('hidden'); document.getElementById('img-pdf-result').classList.add('hidden');
                }
            });
            document.getElementById('btn-img-pdf').addEventListener('click', async () => {
                if(selectedImages.length === 0) return alert("පින්තූර තෝරන්න!");
                const btn = document.getElementById('btn-img-pdf');
                btn.innerText = "Converting... Please wait"; btn.disabled = true;
                try {
                    const { PDFDocument } = window.PDFLib;
                    const pdfDoc = await PDFDocument.create();
                    for (const file of selectedImages) {
                        const arrayBuffer = await file.arrayBuffer();
                        let img = (file.type === 'image/jpeg') ? await pdfDoc.embedJpg(arrayBuffer) : await pdfDoc.embedPng(arrayBuffer);
                        const page = pdfDoc.addPage([img.width, img.height]);
                        page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
                    }
                    const pdfBytes = await pdfDoc.save();
                    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                    const downloadLink = document.getElementById('download-img-pdf');
                    downloadLink.href = URL.createObjectURL(blob); downloadLink.download = "Pahasu_Images.pdf";
                    document.getElementById('img-pdf-result').classList.remove('hidden');
                    btn.innerText = "Convert to PDF"; btn.disabled = false;
                } catch (error) { alert("Error creating PDF."); btn.innerText = "Convert to PDF"; btn.disabled = false; }
            });
        }
    },

    'split-pdf': {
        title: "Split PDF Files | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600 max-w-2xl mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-2">Split PDF</h1>
                <div class="border-4 border-dashed border-gray-300 rounded-xl p-8 mb-6 bg-gray-50">
                    <input type="file" id="split-upload" accept=".pdf" class="hidden">
                    <label for="split-upload" class="cursor-pointer bg-navy hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow">Select PDF File</label>
                    <p class="text-sm text-gray-500 mt-4" id="split-file-name">කිසිදු ගොනුවක් තෝරා නැත</p>
                </div>
                <div id="split-options" class="hidden mb-6 text-left bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div class="flex items-center gap-4">
                        <div><label class="text-sm font-bold">Start Page:</label><input type="number" id="page-start" min="1" value="1" class="w-full p-2 border border-gray-300 rounded"></div>
                        <div><label class="text-sm font-bold">End Page:</label><input type="number" id="page-end" min="1" class="w-full p-2 border border-gray-300 rounded"></div>
                    </div>
                    <p class="text-xs text-red-500 mt-2 font-bold" id="total-pages-info"></p>
                </div>
                <button id="btn-split" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow mb-4 hidden">Extract Pages</button>
                <div id="split-result" class="hidden p-4 bg-green-50 border border-green-200 rounded-lg">
                    <a id="download-split" href="#" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow">Download Extracted PDF</a>
                </div>
            </div>
        `,
        init: function() {
            let selectedFile = null, totalPages = 0;
            document.getElementById('split-upload').addEventListener('change', async (e) => {
                selectedFile = e.target.files[0];
                if (selectedFile) {
                    document.getElementById('split-file-name').innerText = selectedFile.name;
                    const arrayBuffer = await selectedFile.arrayBuffer();
                    const pdf = await window.PDFLib.PDFDocument.load(arrayBuffer);
                    totalPages = pdf.getPageCount();
                    document.getElementById('page-end').value = totalPages;
                    document.getElementById('total-pages-info').innerText = `මුළු පිටු ගණන: ${totalPages}`;
                    document.getElementById('split-options').classList.remove('hidden'); document.getElementById('btn-split').classList.remove('hidden');
                }
            });
            document.getElementById('btn-split').addEventListener('click', async () => {
                const start = parseInt(document.getElementById('page-start').value), end = parseInt(document.getElementById('page-end').value);
                if(start < 1 || end > totalPages || start > end) return alert("නිවැරදි පිටු සීමාවක් දෙන්න!");
                const btn = document.getElementById('btn-split');
                btn.innerText = "Extracting... Please wait"; btn.disabled = true;
                try {
                    const arrayBuffer = await selectedFile.arrayBuffer();
                    const { PDFDocument } = window.PDFLib;
                    const originalPdf = await PDFDocument.load(arrayBuffer);
                    const newPdf = await PDFDocument.create();
                    const pagesToExtract = []; for(let i = start - 1; i <= end - 1; i++) pagesToExtract.push(i);
                    const copiedPages = await newPdf.copyPages(originalPdf, pagesToExtract);
                    copiedPages.forEach((page) => newPdf.addPage(page));
                    const pdfBytes = await newPdf.save();
                    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                    const downloadLink = document.getElementById('download-split');
                    downloadLink.href = URL.createObjectURL(blob); downloadLink.download = `Pahasu_Split_${start}-${end}.pdf`;
                    document.getElementById('split-result').classList.remove('hidden');
                    btn.innerText = "Extract Pages"; btn.disabled = false;
                } catch (error) { alert("Error splitting PDF."); btn.innerText = "Extract Pages"; btn.disabled = false; }
            });
        }
    },

    'pdf-compressor': {
        title: "PDF Optimizer | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600 max-w-2xl mx-auto text-center">
                <h1 class="text-3xl font-bold text-navy mb-2">Basic PDF Optimizer</h1>
                <div class="border-4 border-dashed border-gray-300 rounded-xl p-8 mb-6 bg-gray-50">
                    <input type="file" id="comp-upload" accept=".pdf" class="hidden">
                    <label for="comp-upload" class="cursor-pointer bg-navy hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow">Select PDF File</label>
                    <p class="text-sm text-gray-500 mt-4" id="comp-file-name">කිසිදු ගොනුවක් තෝරා නැත</p>
                </div>
                <button id="btn-compress" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow mb-4 hidden">Optimize PDF</button>
                <div id="comp-result" class="hidden p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p class="text-sm text-gray-600 mb-4" id="comp-stats"></p>
                    <a id="download-comp" href="#" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow">Download Optimized PDF</a>
                </div>
            </div>
        `,
        init: function() {
            let selectedFile = null;
            document.getElementById('comp-upload').addEventListener('change', (e) => {
                selectedFile = e.target.files[0];
                if (selectedFile) {
                    document.getElementById('comp-file-name').innerText = selectedFile.name + ` (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`;
                    document.getElementById('btn-compress').classList.remove('hidden'); document.getElementById('comp-result').classList.add('hidden');
                }
            });
            document.getElementById('btn-compress').addEventListener('click', async () => {
                const btn = document.getElementById('btn-compress'); btn.innerText = "Optimizing..."; btn.disabled = true;
                try {
                    const arrayBuffer = await selectedFile.arrayBuffer();
                    const pdfDoc = await window.PDFLib.PDFDocument.load(arrayBuffer);
                    pdfDoc.setTitle(''); pdfDoc.setAuthor(''); pdfDoc.setSubject(''); pdfDoc.setKeywords([]); pdfDoc.setProducer('Pahasu.lk'); pdfDoc.setCreator('Pahasu.lk');
                    const pdfBytes = await pdfDoc.save({ useObjectStreams: false });
                    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                    const downloadLink = document.getElementById('download-comp');
                    downloadLink.href = URL.createObjectURL(blob); downloadLink.download = "Pahasu_Optimized.pdf";
                    document.getElementById('comp-stats').innerText = `පැරණි: ${(selectedFile.size/1024).toFixed(1)} KB | නව: ${(blob.size/1024).toFixed(1)} KB`;
                    document.getElementById('comp-result').classList.remove('hidden');
                    btn.innerText = "Optimize PDF"; btn.disabled = false;
                } catch (error) { alert("Error optimizing PDF."); btn.innerText = "Optimize PDF"; btn.disabled = false; }
            });
        }
    },

    'pdf-to-word': {
        title: "PDF to Word (Text Extractor) | Pahasu.lk",
        html: `
            <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 max-w-2xl mx-auto text-center">
                <h1 class="text-3xl font-bold text-blue-600 mb-2">PDF to Word (Text Extractor)</h1>
                <div class="border-4 border-dashed border-gray-300 rounded-xl p-8 mb-6 bg-gray-50">
                    <input type="file" id="word-upload" accept=".pdf" class="hidden">
                    <label for="word-upload" class="cursor-pointer bg-navy hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow">Select PDF File</label>
                    <p class="text-sm text-gray-500 mt-4" id="word-file-name">කිසිදු ගොනුවක් තෝරා නැත</p>
                </div>
                <button id="btn-to-word" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow mb-4 hidden">Extract Text & Create Word</button>
                <div id="word-result" class="hidden p-4 bg-green-50 border border-green-200 rounded-lg">
                    <a id="download-word" href="#" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow">Download Word File</a>
                </div>
            </div>
        `,
        init: function() {
            let selectedFile = null;
            document.getElementById('word-upload').addEventListener('change', (e) => {
                selectedFile = e.target.files[0];
                if (selectedFile) {
                    document.getElementById('word-file-name').innerText = selectedFile.name;
                    document.getElementById('btn-to-word').classList.remove('hidden'); document.getElementById('word-result').classList.add('hidden');
                }
            });
            document.getElementById('btn-to-word').addEventListener('click', async () => {
                const btn = document.getElementById('btn-to-word'); btn.innerText = "Extracting..."; btn.disabled = true;
                try {
                    const pdfjsLib = window['pdfjs-dist/build/pdf'];
                    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
                    const arrayBuffer = await selectedFile.arrayBuffer();
                    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
                    let fullText = "";
                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i); const textContent = await page.getTextContent();
                        fullText += textContent.items.map(item => item.str).join(' ') + "<br><br>";
                    }
                    if(fullText.trim() === "") { alert("අකුරු (Text) හඳුනාගැනීමට නොහැක!"); btn.innerText = "Extract Text"; btn.disabled = false; return; }
                    const sourceHTML = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'></head><body>" + fullText + "</body></html>";
                    const blob = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
                    const downloadLink = document.getElementById('download-word');
                    downloadLink.href = URL.createObjectURL(blob); downloadLink.download = "Pahasu_Extracted.doc";
                    document.getElementById('word-result').classList.remove('hidden');
                    btn.innerText = "Extract Text"; btn.disabled = false;
                } catch (error) { alert("Error reading PDF."); btn.innerText = "Extract Text"; btn.disabled = false; }
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
        container.innerHTML = `<div class="text-center py-20"><h1 class="text-5xl text-red-500 font-bold mb-4">404</h1><h2 class="text-2xl text-gray-700 font-bold">Tool Not Found</h2><a href="index.html" class="text-blue-500 underline mt-4 inline-block">Back to Home</a></div>`;
    }
}
window.onload = loadTool;
