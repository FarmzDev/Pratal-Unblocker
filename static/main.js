element = document.createElement("div")
element.innerHTML = (`
<div class="flex w-screen h-[5%] bg-gray-900 gap-x-3 items-center px-2">
            <img class="w-[35px] h-auto" src=${logo}/>
            <a class="text-xl relative underline-animation hover:no-underline text-nowrap" href='/g'>GAMES</a>
            <p class="text-xl relative underline-animation hover:no-underline text-nowrap">APPS</p>
            <p class="text-xl relative underline-animation hover:no-underline text-nowrap">EMULATORS</p>
            <p class="text-xl relative underline-animation hover:no-underline text-nowrap">PROXIES</p>
            <p class="text-xl relative underline-animation hover:no-underline text-nowrap">CHEATS</p>
            <button class="text-xl relative underline-animation hover:no-underline text-nowrap" onclick='openInAboutBlank()'>OPEN BLANK</button>
            <div class="flex justify-end w-full items-end">
                <a class="w-[40px] h-auto" href="https://github.com/FarmzDev/pratal-unblocker">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                </a>
            </div>
        </div>`)
document.body.insertBefore(element, document.body.firstChild)
function openInAboutBlank() {
    win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    html = `
    <style>*{margin:0;padding:0;border:none}body,iframe{height:100vh;width:100vw}iframe{height:100vh}header{display:flex;height:4vh;justify-content:center;}</style><script>
    </script><iframe id=content></iframe>`;
    win.document.querySelector("html").innerHTML = html;
    win.eval(`let content = document.getElementById("content");console.log(content);content.setAttribute("src", "${location.href}");console.log(content);`);
    location.href = "https://google.com";
    close();
}

var clients = {"Eaglercraft 1.8.8": {
    "u29": "eagler_1.8.8_u29",
    "u28": "eagler_1.8.8_u28",
    "u27": "eagler_1.8.8_u27", 
    "u26": "eagler_1.8.8_u26",
    "u25": "eagler_1.8.8_u25",
    "u24": "eagler_1.8.8_u24",
    "u23": "eagler_1.8.8_u23",
    "u22": "eagler_1.8.8_u22",
    "u21": "eagler_1.8.8_u21",
    "u20": "eagler_1.8.8_u20",
    "u19": "eagler_1.8.8_u19",
    "u18": "eagler_1.8.8_u18",
    "u17": "eagler_1.8.8_u17",
    "u16": "eagler_1.8.8_u16",
    "u15": "eagler_1.8.8_u15",
    "u14": "eagler_1.8.8_u14",
    "u13": "eagler_1.8.8_u13",
    "u12": "eagler_1.8.8_u12",
    "u11": "eagler_1.8.8_u11",
    "u10": "eagler_1.8.8_u10",
    "u9": "eagler_1.8.8_u9",
    "u8": "eagler_1.8.8_u8",
    "u7": "eagler_1.8.8_u7",
    "u6": "eagler_1.8.8_u6",
    "u5": "eagler_1.8.8_u5",
    "u4": "eagler_1.8.8_u4",
    "u3": "eagler_1.8.8_u3",
    "u2": "eagler_1.8.8_u2",
    "u1": "eagler_1.8.8_u1",
    "u0": "eagler_1.8.8_u0",
    "rc-03": "eagler_1.8.8_rc-03",
    "rc-02": "eagler_1.8.8_rc-02",
    "rc-01": "eagler_1.8.8_rc-01",
},
"Eaglercraft 1.5.2": {
    "sp1": "eagler_1.5.2_sp1",
    "sp1.01": "eagler_1.5.2_sp1.01",
    "22w43a": "eagler_1.5.2_22w43a",
    "22w42c": "eagler_1.5.2_22w42c",
    "22w42b": "eagler_1.5.2_22w42b",
    "22w42a": "eagler_1.5.2_22w42a",
    "22w41a": "eagler_1.5.2_22w41a",
    "22w40a": "eagler_1.5.2_22w40a",
    "22w38a": "eagler_1.5.2_22w38a",
    "22w36a": "eagler_1.5.2_22w36a",
    "22w35c": "eagler_1.5.2_22w35c",
    "22w35b": "eagler_1.5.2_22w35b",
    "22w35a": "eagler_1.5.2_22w35a",
    "22w34d": "eagler_1.5.2_22w34d",
    "22w34c": "eagler_1.5.2_22w34c",
    "22w34b": "eagler_1.5.2_22w34b",
    "22w34a": "eagler_1.5.2_22w34a",
    "22w30a": "eagler_1.5.2_22w30a",
    "22w29b": "eagler_1.5.2_22w29b",
    "22w29a": "eagler_1.5.2_22w29a",
    "22w23c": "eagler_1.5.2_22w23c",
    "22w23b": "eagler_1.5.2_22w23b",
    "22w23a": "eagler_1.5.2_22w23a",
    "22w22a": "eagler_1.5.2_22w22a",
    "22w20b": "eagler_1.5.2_22w20b",
    "22w20a": "eagler_1.5.2_22w20a",
    "22w19a": "eagler_1.5.2_22w19a",
    "22w16h": "eagler_1.5.2_22w16h",
    "22w16g": "eagler_1.5.2_22w16g",
    "22w16f": "eagler_1.5.2_22w16f",
    "22w16e": "eagler_1.5.2_22w16e",
    "22w16d": "eagler_1.5.2_22w16d",
    "22w16c": "eagler_1.5.2_22w16c",
    "22w16b": "eagler_1.5.2_22w16b",
    "22w16a": "eagler_1.5.2_22w16a",
    "22w15d": "eagler_1.5.2_22w15d",
    "22w15c": "eagler_1.5.2_22w15c",
    "22w15b": "eagler_1.5.2_22w15b",
    "22w15a": "eagler_1.5.2_22w15a",
    "22w14d": "eagler_1.5.2_22w14d",
    "22w14c": "eagler_1.5.2_22w14c",
    "22w14b": "eagler_1.5.2_22w14b",
    "22w14a": "eagler_1.5.2_22w14a",
    "22w13i": "eagler_1.5.2_22w13i",
    "22w13h": "eagler_1.5.2_22w13h",
    "22w13g": "eagler_1.5.2_22w13g",
    "22w13f": "eagler_1.5.2_22w13f",
    "22w13e": "eagler_1.5.2_22w13e",
    "22w13d": "eagler_1.5.2_22w13d",
    "22w13c": "eagler_1.5.2_22w13c",
    "22w13b": "eagler_1.5.2_22w13b",
    "22w13a": "eagler_1.5.2_22w13a",
    "22w10d": "eagler_1.5.2_22w10d",
    "22w10c": "eagler_1.5.2_22w10c",
    "22w10b": "eagler_1.5.2_22w10b",
    "22w10a": "eagler_1.5.2_22w10a",
    "22w07a": "eagler_1.5.2_22w07a",
    "22w04b": "eagler_1.5.2_22w04b",
    "22w04a": "eagler_1.5.2_22w04a",
    "22w03c": "eagler_1.5.2_22w03c",
    "22w03b": "eagler_1.5.2_22w03b",
    "22m03a": "eagler_1.5.2_22m03a",
    "22m02a": "eagler_1.5.2_22m02a",
    "22m01a": "eagler_1.5.2_22m01a",
    "21m12-24": "eagler_1.5.2_21m12-24",
    "21m12-17": "eagler_1.5.2_21m12-17",
    "20m06-29": "eagler_1.5.2_20m06-29",
},
"Eaglercraft b1.3": {
    "22w49a": "eagler_b1.3_22w49a",
    "22w22b": "eagler_b1.3_22w22b",
    "22w22a": "eagler_b1.3_22w22a",
    "22w17a": "eagler_b1.3_22w17a",
},
"Ayuncraft": {
    "v1": "ayuncraft_1.5.2"
}}

function enterEaglerClient(client, version) {
    versions = clients[client]
    version = versions[version]
    window.location = ("https://farmzdev.github.io/eag-clients/clients/" + version + "/index.html")
}