console.log("mahscript carregado.");

const mahThemes = {
  black: { main:"#000000", border:"#333333", pageArea:"#f5f5f5", inputBorder:"#dadce0", rulerRotate:"180deg", shareBg:"#f3f4f6", shareText:"#111827" },
  darkgray: { main:"#2f3136", border:"#44474d", pageArea:"#d9d9d9", inputBorder:"#bdbdbd", rulerRotate:"0deg", shareBg:"#e0e0e0", shareText:"#2f3136" },
  midnight: { main:"#0f172a", border:"#1e293b", pageArea:"#dbeafe", inputBorder:"#bfdbfe", rulerRotate:"200deg", shareBg:"#dbeafe", shareText:"#0f172a" },
  forest: { main:"#14532d", border:"#166534", pageArea:"#dcfce7", inputBorder:"#bbf7d0", rulerRotate:"120deg", shareBg:"#dcfce7", shareText:"#14532d" },
  purple: { main:"#4c1d95", border:"#5b21b6", pageArea:"#f3e8ff", inputBorder:"#e9d5ff", rulerRotate:"270deg", shareBg:"#ede9fe", shareText:"#4c1d95" },
  coffee: { main:"#5d4037", border:"#6d4c41", pageArea:"#fef7ed", inputBorder:"#fed7aa", rulerRotate:"30deg", shareBg:"#fed7aa", shareText:"#3e2723" },
  silver: { main:"#616161", border:"#757575", pageArea:"#f3f4f6", inputBorder:"#d1d5db", rulerRotate:"0deg", shareBg:"#e5e7eb", shareText:"#263238" }
};

const mahSkinNames = {
  black: "Total Black",
  darkgray: "Dark Gray",
  midnight: "Midnight Blue",
  forest: "Forest Dark",
  purple: "Royal Purple",
  coffee: "Coffee Brown",
  silver: "Metal Silver"
};

// Mapeamento das cores para cada skin (para os botões do menu)
const mahSkinColors = {
  black: "#0d0d0d",
  darkgray: "#2f3136",
  midnight: "#0f172a",
  forest: "#14532d",
  purple: "#4c1d95",
  coffee: "#3e2723",
  silver: "#263238"
};

function makeMahSkin(t) {
  return `
html, body, #docs-chrome, #docs-editor, .docs-gm, .docs-shell,
.docs-chrome-top, .docs-chrome-bottom, .docs-header-container,
.docs-titlebar, .docs-titlebar-buttons, .docs-titlebar-center,
.docs-titlebar-right, .docs-title-outer, .docs-menubar,
.docs-toolbar-wrapper, .goog-toolbar, [class*="toolbar"], #gb {
  background-color: ${t.main} !important;
}

.docs-titlebar, .docs-toolbar-wrapper, .docs-header-container, .docs-chrome-top {
  border-bottom: 1px solid ${t.border} !important;
}

.kix-appview-editor, .kix-page-content-wrapper {
  background-color: ${t.pageArea} !important;
}

/* textos gerais e ícones continuam brancos */
.docs-menubar *, 
.docs-toolbar-wrapper *, 
.goog-toolbar *, 
[class*="toolbar"] *, 
.docs-outline-widget *, 
#gb * {
  color: #ffffff !important;
  fill: #ffffff !important;
  font-weight: 500 !important;
}

svg, svg *, .docs-icon-img, .docs-icon, .goog-toolbar-button svg, button svg,
[role="button"] svg, .docs-material svg, .material-icons-extended,
.docs-toolbar-button-icon svg, [class*="icon"] svg, [class*="icon"] img,
img[src*="icon"], i.material-icons, span.material-symbols {
  filter: brightness(0) invert(1) !important;
  fill: #ffffff !important;
  color: #ffffff !important;
  stroke: #ffffff !important;
}

/* nome do arquivo */
.docs-title-input,
input.docs-title-input {
  background: transparent !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  border: none !important;
  box-shadow: none !important;
  text-shadow: none !important;
  -webkit-text-stroke: 0 !important;
  filter: none !important;
  outline: none !important;
  opacity: 1 !important;
}

.docs-title-input-label,
.docs-title-input-label-inner {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
}

/* campo Menus sempre branco, sem fundo claro */
input[placeholder*="Menus"],
input[aria-label*="Menus"],
input[placeholder*="Menu"],
input[aria-label*="Menu"] {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  background: transparent !important;
  opacity: 1 !important;
}

input[placeholder*="Menus"]::placeholder,
input[aria-label*="Menus"]::placeholder,
input[placeholder*="Menu"]::placeholder,
input[aria-label*="Menu"]::placeholder {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  opacity: 1 !important;
}

/* campos específicos: zoom, estilo, fonte e tamanho */
.mahscript-toolbar-field {
  background-color: ${t.shareBg} !important;
  color: ${t.shareText} !important;
  -webkit-text-fill-color: ${t.shareText} !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  filter: none !important;
}

.mahscript-toolbar-field * {
  color: ${t.shareText} !important;
  fill: ${t.shareText} !important;
  stroke: ${t.shareText} !important;
  filter: none !important;
}

/* botões gerais */
.docs-icon-img-container, .docs-icon-img, .docs-icon {
  background-color: transparent !important;
  box-shadow: none !important;
}

/* botão mahscript */
#mahscript-book-button {
  width: 36px !important;
  height: 36px !important;
  margin: 0 10px 0 8px !important;
  border: none !important;
  border-radius: 50% !important;
  background-color: ${t.shareBg} !important;
  color: ${t.shareText} !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  font-size: 18px !important;
  z-index: 999999 !important;
}

#mahscript-book-button,
#mahscript-book-button * {
  color: ${t.shareText} !important;
  fill: ${t.shareText} !important;
  stroke: ${t.shareText} !important;
  filter: none !important;
}

/* menu mahscript - versão com botões coloridos */
#mahscript-skin-menu {
  position: fixed !important;
  top: 58px !important;
  right: 72px !important;
  background: #ffffff !important;
  color: #202124 !important;
  border-radius: 10px !important;
  padding: 14px 12px !important;
  z-index: 9999999 !important;
  box-shadow: 0 8px 28px rgba(0,0,0,0.3) !important;
  font-family: system-ui, -apple-system, sans-serif !important;
  width: 220px !important;
}

#mahscript-skin-menu h3 {
  margin: 0 0 10px 0 !important;
  font-size: 12px !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  color: #5f6368 !important;
  font-weight: 600 !important;
}

.mahscript-menu-item {
  width: 100% !important;
  margin-bottom: 4px !important;
  padding: 7px 12px !important;
  border: 1.5px solid transparent !important;
  border-radius: 6px !important;
  cursor: pointer !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  text-align: left !important;
  background: #ffffff !important;
  color: #202124 !important;
  transition: all 0.15s ease !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}

.mahscript-menu-item:hover {
  transform: translateX(2px) !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
}

.mahscript-menu-item .check {
  font-size: 12px !important;
  opacity: 0;
  transition: opacity 0.2s ease !important;
}

.mahscript-menu-item.active .check {
  opacity: 1 !important;
}

/* Cores dos botões do menu */
.mahscript-menu-item[data-skin="black"] { background: #0d0d0d !important; color: #ffffff !important; border-color: #0d0d0d !important; }
.mahscript-menu-item[data-skin="black"]:hover { background: #1a1a1a !important; }
.mahscript-menu-item[data-skin="black"] .check { color: #ffffff !important; }

.mahscript-menu-item[data-skin="darkgray"] { background: #2f3136 !important; color: #ffffff !important; border-color: #2f3136 !important; }
.mahscript-menu-item[data-skin="darkgray"]:hover { background: #3d4045 !important; }
.mahscript-menu-item[data-skin="darkgray"] .check { color: #ffffff !important; }

.mahscript-menu-item[data-skin="midnight"] { background: #0f172a !important; color: #ffffff !important; border-color: #0f172a !important; }
.mahscript-menu-item[data-skin="midnight"]:hover { background: #1e293b !important; }
.mahscript-menu-item[data-skin="midnight"] .check { color: #ffffff !important; }

.mahscript-menu-item[data-skin="forest"] { background: #14532d !important; color: #ffffff !important; border-color: #14532d !important; }
.mahscript-menu-item[data-skin="forest"]:hover { background: #1a6b38 !important; }
.mahscript-menu-item[data-skin="forest"] .check { color: #ffffff !important; }

.mahscript-menu-item[data-skin="purple"] { background: #4c1d95 !important; color: #ffffff !important; border-color: #4c1d95 !important; }
.mahscript-menu-item[data-skin="purple"]:hover { background: #5b21b6 !important; }
.mahscript-menu-item[data-skin="purple"] .check { color: #ffffff !important; }

.mahscript-menu-item[data-skin="coffee"] { background: #3e2723 !important; color: #ffffff !important; border-color: #3e2723 !important; }
.mahscript-menu-item[data-skin="coffee"]:hover { background: #4e342e !important; }
.mahscript-menu-item[data-skin="coffee"] .check { color: #ffffff !important; }

.mahscript-menu-item[data-skin="silver"] { background: #263238 !important; color: #ffffff !important; border-color: #263238 !important; }
.mahscript-menu-item[data-skin="silver"]:hover { background: #37474f !important; }
.mahscript-menu-item[data-skin="silver"] .check { color: #ffffff !important; }

.mahscript-menu-item[data-skin="default"] { background: #f1f3f4 !important; color: #202124 !important; border-color: #dadce0 !important; }
.mahscript-menu-item[data-skin="default"]:hover { background: #e8eaed !important; }
.mahscript-menu-item[data-skin="default"] .check { color: #1a73e8 !important; }

/* Separador no menu */
.mahscript-menu-separator {
  height: 1px !important;
  background: #e8eaed !important;
  margin: 4px 0 !important;
}

/* Compartilhar e Edição */
[aria-label*="Compartilhar"], [aria-label*="Share"], [guidedhelpid*="share"],
.docs-titlebar-share-client-button, .docs-titlebar-share-client-button-outer,
[aria-label*="Edição"], [aria-label*="Editing"], [aria-label*="Editar"],
[aria-label*="modo"], [aria-label*="Mode"], [guidedhelpid*="mode"],
.docs-editing-mode-button, .docs-mode-switcher, .docs-toolbar-mode-switcher {
  background-color: ${t.shareBg} !important;
  color: ${t.shareText} !important;
  border: none !important;
  filter: none !important;
}

[aria-label*="Compartilhar"], [aria-label*="Share"], [guidedhelpid*="share"],
.docs-titlebar-share-client-button, .docs-titlebar-share-client-button-outer {
  border-radius: 24px 0 0 24px !important;
}

[aria-label*="Edição"], [aria-label*="Editing"], [aria-label*="Editar"],
[aria-label*="modo"], [aria-label*="Mode"], [guidedhelpid*="mode"],
.docs-editing-mode-button, .docs-mode-switcher, .docs-toolbar-mode-switcher {
  border-radius: 24px !important;
}

.docs-titlebar-share-client-button + div,
.docs-titlebar-share-client-button-outer + div,
[aria-label*="Compartilhar"] + div,
[aria-label*="Share"] + div {
  background-color: ${t.shareBg} !important;
  color: ${t.shareText} !important;
  border-radius: 0 24px 24px 0 !important;
  margin-left: 1px !important;
}

[aria-label*="Compartilhar"] *, [aria-label*="Share"] *, [guidedhelpid*="share"] *,
.docs-titlebar-share-client-button *, .docs-titlebar-share-client-button-outer *,
[aria-label*="Edição"] *, [aria-label*="Editing"] *, [aria-label*="Editar"] *,
[aria-label*="modo"] *, [aria-label*="Mode"] *, [guidedhelpid*="mode"] *,
.docs-editing-mode-button *, .docs-mode-switcher *, .docs-toolbar-mode-switcher * {
  color: ${t.shareText} !important;
  fill: ${t.shareText} !important;
  stroke: ${t.shareText} !important;
  filter: none !important;
  background: transparent !important;
}

/* painel lateral de guias */
.docs-document-tabs,
.docs-document-tabs-container,
[aria-label*="Guias no documento"],
[aria-label*="Document tabs"] {
  background-color: ${t.main} !important;
  color: #ffffff !important;
}

.docs-document-tabs *,
.docs-document-tabs-container *,
[aria-label*="Guias no documento"] *,
[aria-label*="Document tabs"] * {
  color: #ffffff !important;
  fill: #ffffff !important;
  stroke: #ffffff !important;
}

.docs-document-tabs div:not([aria-selected="true"]),
.docs-document-tabs-container div:not([aria-selected="true"]),
[aria-label*="Guias no documento"] div:not([aria-selected="true"]),
[aria-label*="Document tabs"] div:not([aria-selected="true"]) {
  background-color: transparent !important;
}

.docs-document-tabs [aria-selected="true"],
.docs-document-tabs-container [aria-selected="true"],
[aria-label*="Guia 1"],
[aria-label*="Tab 1"] {
  background-color: ${t.shareBg} !important;
  color: ${t.shareText} !important;
  border-radius: 24px !important;
  border: none !important;
  box-shadow: none !important;
}

.docs-document-tabs [aria-selected="true"] *,
.docs-document-tabs-container [aria-selected="true"] *,
[aria-label*="Guia 1"] *,
[aria-label*="Tab 1"] * {
  color: ${t.shareText} !important;
  fill: ${t.shareText} !important;
  stroke: ${t.shareText} !important;
}

img[src*="googleusercontent"], .gb_Aa, .gb_Pa, .gbii {
  filter: none !important;
  background-color: transparent !important;
  border-radius: 50% !important;
}

input[type="text"]:not(.docs-title-input),
input[type="search"],
textarea,
[contenteditable="true"]:not(.kix-page-paginated *) {
  background-color: #ffffff !important;
  color: #000000 !important;
  border: 1px solid ${t.inputBorder} !important;
  caret-color: #000000 !important;
}

.kix-ruler {
  background-color: ${t.pageArea} !important;
  filter: invert(1) hue-rotate(${t.rulerRotate});
}

.kix-page-paginated {
  background-color: #ffffff !important;
  color: #000000 !important;
  box-shadow: 0 0 15px rgba(0,0,0,0.15) !important;
}

.kix-page-paginated * {
  background: transparent !important;
  color: inherit !important;
}
`;
}

function markToolbarFields() {
  document.querySelectorAll(".docs-toolbar-wrapper div, .docs-toolbar-wrapper span, .docs-toolbar-wrapper input").forEach(el => {
    const txt = (el.innerText || el.value || el.getAttribute("aria-label") || "").trim();

    if (
      txt === "100%" ||
      txt.includes("Texto") ||
      txt.includes("Arial") ||
      txt === "11" ||
      txt === "12" ||
      txt === "13" ||
      txt === "14" ||
      txt === "15" ||
      txt === "16"
    ) {
      let target = el;

      for (let i = 0; i < 3; i++) {
        if (target.parentElement && target.parentElement.closest(".docs-toolbar-wrapper")) {
          const parentText = (target.parentElement.innerText || "").trim();
          if (parentText.length <= 30) target = target.parentElement;
        }
      }

      target.classList.add("mahscript-toolbar-field");
    }
  });
}

function applyMahSkin(skinName) {
  document.getElementById("mahscript-style")?.remove();

  if (!mahThemes[skinName]) return;

  const style = document.createElement("style");
  style.id = "mahscript-style";
  style.textContent = makeMahSkin(mahThemes[skinName]);
  document.documentElement.appendChild(style);

  injectMahButton(skinName);

  setTimeout(markToolbarFields, 300);
  setTimeout(markToolbarFields, 1000);
  setTimeout(markToolbarFields, 2000);
}

function injectMahButton(currentSkin = "black") {
  document.getElementById("mahscript-book-button")?.remove();

  const rightArea =
    document.querySelector(".docs-titlebar-buttons") ||
    document.querySelector(".docs-titlebar-right") ||
    document.querySelector("#gb");

  if (!rightArea) return;

  const btn = document.createElement("button");
  btn.id = "mahscript-book-button";
  btn.type = "button";
  btn.title = "mahscript ativo";
  btn.innerHTML = "📖";

  rightArea.insertBefore(btn, rightArea.firstChild);

  btn.addEventListener("click", () => {
    const oldMenu = document.getElementById("mahscript-skin-menu");
    if (oldMenu) {
      oldMenu.remove();
      return;
    }

    const menu = document.createElement("div");
    menu.id = "mahscript-skin-menu";
    menu.innerHTML = "<h3>Skins</h3>";

    // Botões das skins (com cores)
    Object.entries(mahSkinNames).forEach(([key, label]) => {
      const item = document.createElement("button");
      item.className = "mahscript-menu-item";
      item.setAttribute("data-skin", key);
      if (key === currentSkin) item.classList.add("active");
      item.innerHTML = `${label} <span class="check">✓</span>`;
      item.onclick = () => {
        applyMahSkin(key);
        menu.remove();
      };
      menu.appendChild(item);
    });

    // Separador
    const sep = document.createElement("div");
    sep.className = "mahscript-menu-separator";
    menu.appendChild(sep);

    // Botão Default
    const defaultItem = document.createElement("button");
    defaultItem.className = "mahscript-menu-item";
    defaultItem.setAttribute("data-skin", "default");
    if (currentSkin === "default") defaultItem.classList.add("active");
    defaultItem.innerHTML = `Default <span class="check">✓</span>`;
    defaultItem.onclick = () => {
      applyMahSkin("default");
      menu.remove();
    };
    menu.appendChild(defaultItem);

    document.body.appendChild(menu);
  });
}

setTimeout(() => applyMahSkin("black"), 1500);

chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "applySkin") {
    applyMahSkin(msg.skin);
  }
});