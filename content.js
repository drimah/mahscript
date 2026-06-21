console.log("mahscript v3.7 carregado.");
const mahThemes = {
black: { main: "#000000", border: "#333333", pageArea: "#f5f5f5", inputBorder: "#dadce0", rulerRotate: "180deg", shareBg: "#f3f4f6", shareText: "#111827" },
darkgray: { main: "#2f3136", border: "#44474d", pageArea: "#d9d9d9", inputBorder: "#bdbdbd", rulerRotate: "0deg", shareBg: "#e0e0e0", shareText: "#2f3136" },
midnight: { main: "#0f172a", border: "#1e293b", pageArea: "#dbeafe", inputBorder: "#bfdbfe", rulerRotate: "200deg", shareBg: "#dbeafe", shareText: "#0f172a" },
forest: { main: "#14532d", border: "#166534", pageArea: "#dcfce7", inputBorder: "#bbf7d0", rulerRotate: "120deg", shareBg: "#dcfce7", shareText: "#14532d" },
purple: { main: "#4c1d95", border: "#5b21b6", pageArea: "#f3e8ff", inputBorder: "#e9d5ff", rulerRotate: "270deg", shareBg: "#ede9fe", shareText: "#4c1d95" },
coffee: { main: "#5d4037", border: "#6d4c41", pageArea: "#fef7ed", inputBorder: "#fed7aa", rulerRotate: "30deg", shareBg: "#fed7aa", shareText: "#3e2723" },
silver: { main: "#616161", border: "#757575", pageArea: "#f3f4f6", inputBorder: "#d1d5db", rulerRotate: "0deg", shareBg: "#e5e7eb", shareText: "#263238" },
crimson: { main: "#7f1d1d", border: "#991b1b", pageArea: "#fee2e2", inputBorder: "#fecaca", rulerRotate: "0deg", shareBg: "#fee2e2", shareText: "#7f1d1d" },
amber: { main: "#78350f", border: "#92400e", pageArea: "#fef3c7", inputBorder: "#fde68a", rulerRotate: "45deg", shareBg: "#fef3c7", shareText: "#78350f" },
teal: { main: "#134e4a", border: "#115e59", pageArea: "#ccfbf1", inputBorder: "#99f6e4", rulerRotate: "180deg", shareBg: "#ccfbf1", shareText: "#134e4a" },
slate: { main: "#1e293b", border: "#334155", pageArea: "#f1f5f9", inputBorder: "#cbd5e1", rulerRotate: "0deg", shareBg: "#f1f5f9", shareText: "#1e293b" },
rose: { main: "#881337", border: "#9f1239", pageArea: "#ffe4e6", inputBorder: "#fecdd3", rulerRotate: "330deg", shareBg: "#ffe4e6", shareText: "#881337" }
};
const mahSkinNames = {
black: "Total Black", darkgray: "Dark Gray", midnight: "Midnight Blue", forest: "Forest Dark",
purple: "Royal Purple", coffee: "Coffee Brown", silver: "Metal Silver", crimson: "Crimson Red",
amber: "Amber Gold", teal: "Teal Deep", slate: "Slate Blue", rose: "Rose Wine"
};
let currentSkin = localStorage.getItem('mahscript_skin') || 'black';

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
.docs-menubar *, .docs-toolbar-wrapper *, .goog-toolbar *, [class*="toolbar"] *, .docs-outline-widget *, #gb * {
color: #ffffff !important; fill: #ffffff !important; font-weight: 500 !important;
}
svg:not(.mahscript-icon), svg:not(.mahscript-icon) *, .docs-icon-img, .docs-icon, .goog-toolbar-button svg, button svg,
[role="button"] svg, .docs-material svg, .material-icons-extended,
.docs-toolbar-button-icon svg, [class*="icon"] svg, [class*="icon"] img,
img[src*="icon"], i.material-icons, span.material-symbols {
filter: brightness(0) invert(1) !important; fill: #ffffff !important; color: #ffffff !important; stroke: #ffffff !important;
}
.docs-title-input, input.docs-title-input {
background: transparent !important; color: #ffffff !important; -webkit-text-fill-color: #ffffff !important;
border: none !important; box-shadow: none !important; outline: none !important; opacity: 1 !important;
}
.docs-title-input-label, .docs-title-input-label-inner { display: none !important; visibility: hidden !important; opacity: 0 !important; }
input[placeholder*="Menus"], input[aria-label*="Menus"], input[placeholder*="Menu"], input[aria-label*="Menu"] {
color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; background: transparent !important; opacity: 1 !important;
}
input[placeholder*="Menus"]::placeholder, input[aria-label*="Menus"]::placeholder,
input[placeholder*="Menu"]::placeholder, input[aria-label*="Menu"]::placeholder {
color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; opacity: 1 !important;
}
.docs-icon-img-container, .docs-icon-img, .docs-icon { background-color: transparent !important; box-shadow: none !important; }

.mahscript-native-btn {
    width: 36px !important; height: 36px !important; margin: 0 4px !important;
    border: none !important; border-radius: 50% !important;
    background-color: transparent !important;
    display: inline-flex !important; align-items: center !important; justify-content: center !important;
    cursor: pointer !important; z-index: 999999 !important;
    transition: background-color 0.2s ease !important;
    vertical-align: middle !important; padding: 0 !important; line-height: 1 !important;
}
.mahscript-native-btn:hover { background-color: rgba(255, 255, 255, 0.15) !important; }
.mahscript-native-btn svg { width: 20px !important; height: 20px !important; fill: none !important; stroke: #ffffff !important; stroke-width: 2 !important; stroke-linecap: round !important; stroke-linejoin: round !important; display: block !important; }

.docs-titlebar-buttons button:not(.mahscript-native-btn),
.docs-titlebar-right button:not(.mahscript-native-btn),
[role="button"]:not(.mahscript-native-btn) svg {
    fill: none !important; stroke: #ffffff !important; stroke-width: 2 !important;
}
.docs-titlebar-buttons button:not(.mahscript-native-btn):hover,
.docs-titlebar-right button:not(.mahscript-native-btn):hover {
    background-color: rgba(255, 255, 255, 0.15) !important;
}

#mahscript-toast {
    position: fixed !important; bottom: 24px !important; right: 306px !important;
    background: ${t.main} !important; color: #ffffff !important;
    padding: 12px 20px !important; border-radius: 8px !important;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3) !important; z-index: 9999999 !important;
    font-family: Arial, Roboto, sans-serif !important; font-size: 13px !important; font-weight: 500 !important;
    display: none !important; align-items: center !important; gap: 10px !important;
    border: 1px solid ${t.border} !important; animation: slideIn 0.3s ease !important;
}
@keyframes slideIn { from { transform: translateX(400px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

#mahscript-delete-modal {
    position: fixed !important; top: 50% !important; left: 50% !important;
    transform: translate(-50%, -50%) !important; background: ${t.main} !important; color: #ffffff !important;
    padding: 24px !important; border-radius: 12px !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5) !important; z-index: 99999999 !important;
    font-family: Arial, Roboto, sans-serif !important; min-width: 320px !important; border: 1px solid ${t.border} !important;
}
#mahscript-delete-modal h3 { margin: 0 0 12px 0 !important; font-size: 16px !important; font-weight: 600 !important; color: #ffffff !important; }
#mahscript-delete-modal p { margin: 0 0 20px 0 !important; font-size: 13px !important; opacity: 0.9 !important; line-height: 1.5 !important; }
.mahscript-modal-actions { display: flex !important; gap: 10px !important; justify-content: flex-end !important; }
.mahscript-modal-btn { padding: 8px 16px !important; border-radius: 6px !important; border: none !important; font-size: 13px !important; font-weight: 600 !important; cursor: pointer !important; transition: opacity 0.2s !important; }
.mahscript-modal-btn:hover { opacity: 0.8 !important; }
#mahscript-delete-cancel { background: rgba(255,255,255,0.1) !important; color: #ffffff !important; }
#mahscript-delete-confirm { background: #ef4444 !important; color: #ffffff !important; }

#mahscript-skins-section { padding: 16px !important; overflow-y: auto !important; max-height: calc(100vh - 200px) !important; }
.mahscript-skins-title { margin: 0 0 12px 0 !important; font-size: 11px !important; text-transform: uppercase !important; letter-spacing: 1px !important; color: #ffffff !important; font-weight: 600 !important; opacity: 0.6 !important; padding-bottom: 8px !important; border-bottom: 1px solid ${t.border} !important; }
#mahscript-skins-list { display: flex !important; flex-direction: column !important; gap: 6px !important; }
.mahscript-menu-item { width: 100% !important; padding: 10px 14px !important; border: 1px solid transparent !important; border-radius: 8px !important; cursor: pointer !important; font-size: 13px !important; font-weight: 500 !important; text-align: left !important; background: rgba(255,255,255,0.04) !important; color: #ffffff !important; transition: all 0.2s ease !important; display: flex !important; justify-content: space-between !important; align-items: center !important; font-family: Arial, Roboto, sans-serif !important; }
.mahscript-menu-item:hover { background: rgba(255,255,255,0.1) !important; transform: translateX(3px) !important; }
.mahscript-menu-item .check { font-size: 14px !important; opacity: 0; transition: opacity 0.2s ease !important; color: #4ade80 !important; }
.mahscript-menu-item.active { background: rgba(255,255,255,0.12) !important; border-color: rgba(255,255,255,0.2) !important; }
.mahscript-menu-item.active .check { opacity: 1 !important; }
.mahscript-menu-item[data-skin="black"] { background: linear-gradient(135deg, #0d0d0d, #1a1a1a) !important; }
.mahscript-menu-item[data-skin="darkgray"] { background: linear-gradient(135deg, #2f3136, #3a3d44) !important; }
.mahscript-menu-item[data-skin="midnight"] { background: linear-gradient(135deg, #0f172a, #1e293b) !important; }
.mahscript-menu-item[data-skin="forest"] { background: linear-gradient(135deg, #14532d, #166534) !important; }
.mahscript-menu-item[data-skin="purple"] { background: linear-gradient(135deg, #4c1d95, #5b21b6) !important; }
.mahscript-menu-item[data-skin="coffee"] { background: linear-gradient(135deg, #5d4037, #6d4c41) !important; }
.mahscript-menu-item[data-skin="silver"] { background: linear-gradient(135deg, #616161, #757575) !important; }
.mahscript-menu-item[data-skin="crimson"] { background: linear-gradient(135deg, #7f1d1d, #991b1b) !important; }
.mahscript-menu-item[data-skin="amber"] { background: linear-gradient(135deg, #78350f, #92400e) !important; }
.mahscript-menu-item[data-skin="teal"] { background: linear-gradient(135deg, #134e4a, #115e59) !important; }
.mahscript-menu-item[data-skin="slate"] { background: linear-gradient(135deg, #1e293b, #334155) !important; }
.mahscript-menu-item[data-skin="rose"] { background: linear-gradient(135deg, #881337, #9f1239) !important; }

#mahscript-settings-section { padding: 16px !important; overflow-y: auto !important; max-height: calc(100vh - 200px) !important; }
.mah-form label { display: block !important; font-size: 11px !important; color: #ffffff !important; margin-top: 14px !important; margin-bottom: 6px !important; opacity: 0.7 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; font-weight: 600 !important; }
.mah-form input, .mah-form textarea, .mah-form select { width: 100% !important; padding: 10px 12px !important; border-radius: 6px !important; border: 1px solid ${t.border} !important; background: rgba(255,255,255,0.06) !important; color: #ffffff !important; font-size: 13px !important; box-sizing: border-box !important; outline: none !important; font-family: Arial, Roboto, sans-serif !important; transition: border-color 0.2s !important; }
.mah-form input:focus, .mah-form textarea:focus, .mah-form select:focus { border-color: rgba(255,255,255,0.4) !important; }
.mah-form textarea { resize: vertical !important; min-height: 80px !important; }
.mah-btn-save { margin-top: 18px !important; padding: 10px !important; background: rgba(255,255,255,0.15) !important; color: #ffffff !important; border: 1px solid rgba(255,255,255,0.2) !important; border-radius: 6px !important; cursor: pointer !important; font-weight: 600 !important; width: 100% !important; transition: all 0.2s !important; font-size: 13px !important; letter-spacing: 0.5px !important; }
.mah-btn-save:hover { background: rgba(255,255,255,0.25) !important; }
.mah-cover-preview { width: 100% !important; height: 140px !important; background: rgba(255,255,255,0.04) !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; overflow: hidden !important; margin-bottom: 10px !important; border: 1px dashed ${t.border} !important; flex-direction: column !important; gap: 10px !important; }
.mah-cover-preview img { max-width: 100% !important; max-height: 100% !important; object-fit: cover !important; }
.mah-placeholder { color: #888 !important; font-size: 12px !important; }

#mahscript-inline-prompt { padding: 12px 16px !important; border-bottom: 1px solid ${t.border} !important; background: rgba(0,0,0,0.2) !important; }
#mahscript-prompt-input { width: 100% !important; padding: 10px 12px !important; border-radius: 6px !important; border: 1px solid ${t.border} !important; background: rgba(255,255,255,0.06) !important; color: #ffffff !important; font-size: 13px !important; box-sizing: border-box !important; margin-bottom: 10px !important; outline: none !important; }
#mahscript-prompt-input:focus { border-color: rgba(255,255,255,0.4) !important; }
.mahscript-prompt-actions { display: flex !important; gap: 8px !important; justify-content: flex-end !important; }
.mahscript-prompt-btn { padding: 7px 14px !important; border-radius: 6px !important; border: none !important; font-size: 12px !important; font-weight: 600 !important; cursor: pointer !important; transition: opacity 0.2s !important; }
.mahscript-prompt-btn:hover { opacity: 0.8 !important; }
#mahscript-prompt-cancel { background: rgba(255,255,255,0.1) !important; color: #ffffff !important; }
#mahscript-prompt-ok { background: rgba(255,255,255,0.2) !important; color: #ffffff !important; }

[aria-label*="Compartilhar"], [aria-label*="Share"], [guidedhelpid*="share"], .docs-titlebar-share-client-button, .docs-titlebar-share-client-button-outer, [aria-label*="Edição"], [aria-label*="Editing"], [aria-label*="Editar"], [aria-label*="modo"], [aria-label*="Mode"], [guidedhelpid*="mode"], .docs-editing-mode-button, .docs-mode-switcher, .docs-toolbar-mode-switcher { background-color: ${t.shareBg} !important; color: ${t.shareText} !important; border: none !important; filter: none !important; }
[aria-label*="Compartilhar"], [aria-label*="Share"], [guidedhelpid*="share"], .docs-titlebar-share-client-button, .docs-titlebar-share-client-button-outer { border-radius: 24px 0 0 24px !important; }
[aria-label*="Edição"], [aria-label*="Editing"], [aria-label*="Editar"], [aria-label*="modo"], [aria-label*="Mode"], [guidedhelpid*="mode"], .docs-editing-mode-button, .docs-mode-switcher, .docs-toolbar-mode-switcher { border-radius: 24px !important; }
.docs-titlebar-share-client-button + div, .docs-titlebar-share-client-button-outer + div, [aria-label*="Compartilhar"] + div, [aria-label*="Share"] + div { background-color: ${t.shareBg} !important; color: ${t.shareText} !important; border-radius: 0 24px 24px 0 !important; margin-left: 1px !important; }
[aria-label*="Compartilhar"] *, [aria-label*="Share"] *, [guidedhelpid*="share"] *, .docs-titlebar-share-client-button *, .docs-titlebar-share-client-button-outer *, [aria-label*="Edição"] *, [aria-label*="Editing"] *, [aria-label*="Editar"] *, [aria-label*="modo"] *, [aria-label*="Mode"] *, [guidedhelpid*="mode"] *, .docs-editing-mode-button *, .docs-mode-switcher *, .docs-toolbar-mode-switcher * { color: ${t.shareText} !important; fill: ${t.shareText} !important; stroke: ${t.shareText} !important; filter: none !important; background: transparent !important; }

.docs-document-tabs, .docs-document-tabs-container, [aria-label*="Guias no documento"], [aria-label*="Document tabs"] { background-color: ${t.main} !important; color: #ffffff !important; }
.docs-document-tabs *, .docs-document-tabs-container *, [aria-label*="Guias no documento"] *, [aria-label*="Document tabs"] * { color: #ffffff !important; fill: #ffffff !important; stroke: #ffffff !important; }
.docs-document-tabs div:not([aria-selected="true"]), .docs-document-tabs-container div:not([aria-selected="true"]), [aria-label*="Guias no documento"] div:not([aria-selected="true"]), [aria-label*="Document tabs"] div:not([aria-selected="true"]) { background-color: transparent !important; }
.docs-document-tabs [aria-selected="true"], .docs-document-tabs-container [aria-selected="true"], [aria-label*="Guia 1"], [aria-label*="Tab 1"] { background-color: ${t.shareBg} !important; color: ${t.shareText} !important; border-radius: 24px !important; border: none !important; box-shadow: none !important; }
.docs-document-tabs [aria-selected="true"] *, .docs-document-tabs-container [aria-selected="true"] *, [aria-label*="Guia 1"] *, [aria-label*="Tab 1"] * { color: ${t.shareText} !important; fill: ${t.shareText} !important; stroke: ${t.shareText} !important; }
img[src*="googleusercontent"], .gb_Aa, .gb_Pa, .gbii { filter: none !important; background-color: transparent !important; border-radius: 50% !important; }
input[type="text"]:not(.docs-title-input), input[type="search"], textarea, [contenteditable="true"]:not(.kix-page-paginated *) { background-color: #ffffff !important; color: #000000 !important; border: 1px solid ${t.inputBorder} !important; caret-color: #000000 !important; }
.kix-ruler { background-color: ${t.pageArea} !important; filter: invert(1) hue-rotate(${t.rulerRotate}); }
.kix-page-paginated { background-color: #ffffff !important; color: #000000 !important; box-shadow: 0 0 15px rgba(0,0,0,0.15) !important; }
.kix-page-paginated * { background: transparent !important; color: inherit !important; }

#mahscript-docs-chapter-panel {
    position: fixed !important; right: 0 !important; width: 282px !important;
    z-index: 9999997 !important; background: ${t.main} !important; color: #ffffff !important;
    font-family: Arial, Roboto, sans-serif !important;
    display: none !important; flex-direction: column !important; overflow: hidden !important;
    border-left: 1px solid ${t.border} !important;
}
.mahscript-chapter-header-row { display: none !important; align-items: center !important; justify-content: space-between !important; padding: 12px 20px !important; color: #ffffff !important; border-bottom: 1px solid ${t.border} !important; background: rgba(0,0,0,0.15) !important; }
.mahscript-chapter-header-title { color: #ffffff !important; font-size: 13px !important; font-weight: 600 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; }
.mahscript-chapter-add { border: none !important; background: transparent !important; color: #ffffff !important; width: 28px !important; height: 28px !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 20px !important; cursor: pointer !important; border-radius: 50% !important; padding: 0 !important; }
.mahscript-chapter-add:hover { background: rgba(255,255,255,.12) !important; }

#mahscript-chapter-list { display: flex !important; flex-direction: column !important; gap: 4px !important; padding: 12px 16px !important; overflow-y: auto !important; flex: 1 !important; }
.mahscript-chapter-item { min-height: 42px !important; border-radius: 8px !important; background: rgba(255,255,255,0.05) !important; color: #ffffff !important; display: flex !important; align-items: center !important; padding: 0 16px !important; cursor: pointer !important; font-size: 13px !important; font-weight: 400 !important; user-select: none !important; transition: all 0.15s ease !important; border: 1px solid transparent !important; }
.mahscript-chapter-item:hover { background: rgba(255,255,255,0.1) !important; border-color: rgba(255,255,255,0.1) !important; }
.mahscript-chapter-item:active { background: rgba(255,255,255,0.15) !important; }
.mahscript-chapter-title-text { flex: 1 !important; color: #ffffff !important; font-size: 13px !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }
.mahscript-chapter-empty { padding: 20px !important; color: #ffffff !important; font-style: italic !important; font-size: 13px !important; opacity: 0.6 !important; text-align: center !important; }
`;
}

function showToast(message) {
    const toast = document.getElementById('mahscript-toast');
    if (toast) toast.remove();
    const newToast = document.createElement('div');
    newToast.id = 'mahscript-toast';
    newToast.textContent = message;
    document.body.appendChild(newToast);
    newToast.style.display = 'flex';
    setTimeout(() => { newToast.style.opacity = '0'; newToast.style.transition = 'opacity 0.3s'; setTimeout(() => newToast.remove(), 300); }, 3000);
}

function showDeleteModal(chapterTitle, onConfirm) {
    const modal = document.createElement('div');
    modal.id = 'mahscript-delete-modal';
    modal.innerHTML = `
        <h3>Excluir Capítulo</h3>
        <p>Tem certeza que deseja excluir "<strong>${chapterTitle}</strong>"? Esta ação não pode ser desfeita e o capítulo será removido permanentemente do documento.</p>
        <div class="mahscript-modal-actions">
            <button id="mahscript-delete-cancel" class="mahscript-modal-btn">Cancelar</button>
            <button id="mahscript-delete-confirm" class="mahscript-modal-btn">Excluir Permanentemente</button>
        </div>`;
    document.body.appendChild(modal);
    document.getElementById('mahscript-delete-cancel').onclick = () => modal.remove();
    document.getElementById('mahscript-delete-confirm').onclick = () => { modal.remove(); if (onConfirm) onConfirm(); };
}

function applyMahSkin(skinName) {
    document.getElementById("mahscript-style")?.remove();
    if (!mahThemes[skinName]) return;
    const style = document.createElement("style");
    style.id = "mahscript-style";
    style.textContent = makeMahSkin(mahThemes[skinName]);
    document.documentElement.appendChild(style);
    currentSkin = skinName;
    localStorage.setItem('mahscript_skin', skinName);
    injectNativeButtons();
    setTimeout(() => {
        if(window.mahPanelInstance) { window.mahPanelInstance.adjustPosition(); }
    }, 100);
}

function toggleSection(targetId) {
    const panel = document.getElementById('mahscript-docs-chapter-panel');
    if (!panel) return;

    const sections = ['mahscript-chapters-area', 'mahscript-skins-section', 'mahscript-settings-section'];
    const target = document.getElementById(targetId);
    if (!target) return;

    const isCurrentlyVisible = target.style.display === 'block';

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    const header = document.querySelector('.mahscript-chapter-header-row');
    const prompt = document.getElementById('mahscript-inline-prompt');
    if (header) header.style.display = 'none';
    if (prompt) prompt.style.display = 'none';

    if (!isCurrentlyVisible) {
        panel.style.setProperty('display', 'flex', 'important');
        target.style.display = 'block';
        
        if (targetId === 'mahscript-chapters-area') {
            if (header) header.style.display = 'flex';
            if(window.mahPanelInstance) window.mahPanelInstance.scanChapters();
        }
        if (targetId === 'mahscript-skins-section') populateSkinsList();
        if (targetId === 'mahscript-settings-section') renderSettingsForm();
    } else {
        panel.style.setProperty('display', 'none', 'important');
    }
}

function populateSkinsList() {
    const list = document.getElementById("mahscript-skins-list");
    if (!list) return;
    if (list.children.length > 0) return;
    
    list.innerHTML = '';
    Object.entries(mahSkinNames).forEach(([key, label]) => {
        const item = document.createElement("button");
        item.className = "mahscript-menu-item";
        item.setAttribute("data-skin", key);
        if (key === currentSkin) item.classList.add("active");
        item.innerHTML = `${label} <span class="check">✓</span>`;
        item.onclick = () => { 
            applyMahSkin(key); 
            list.querySelectorAll('.mahscript-menu-item').forEach(i => i.classList.remove('active')); 
            item.classList.add('active'); 
        };
        list.appendChild(item);
    });
}

function injectNativeButtons() {
    ['mahscript-btn-skins', 'mahscript-btn-settings', 'mahscript-btn-chapters'].forEach(id => { document.getElementById(id)?.remove(); });
    const rightArea = document.querySelector(".docs-titlebar-buttons") || document.querySelector(".docs-titlebar-right");
    if (!rightArea) return;

    const icons = {
        skins: '<svg class="mahscript-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>',
        settings: '<svg class="mahscript-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
        chapters: '<svg class="mahscript-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
    };

    const buttonsHtml = `
        <button id="mahscript-btn-chapters" class="mahscript-native-btn" title="Capítulos">${icons.chapters}</button>
        <button id="mahscript-btn-skins" class="mahscript-native-btn" title="Alterar Skin">${icons.skins}</button>
        <button id="mahscript-btn-settings" class="mahscript-native-btn" title="Configurações">${icons.settings}</button>
    `;
    rightArea.insertAdjacentHTML('afterbegin', buttonsHtml);

    document.getElementById('mahscript-btn-chapters').onclick = (e) => { e.stopPropagation(); toggleSection('mahscript-chapters-area'); };
    document.getElementById('mahscript-btn-skins').onclick = (e) => { e.stopPropagation(); toggleSection('mahscript-skins-section'); };
    document.getElementById('mahscript-btn-settings').onclick = (e) => { e.stopPropagation(); toggleSection('mahscript-settings-section'); };
}

function renderSettingsForm() {
    const container = document.getElementById("mahscript-settings-section");
    const docId = window.location.href.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || 'unknown';
    const meta = JSON.parse(localStorage.getItem(`mah_meta_${docId}`) || '{}');

    container.innerHTML = `
        <h3 class="mahscript-skins-title">Configurações</h3>
        <div class="mah-form">
            <div class="mah-cover-preview">
               ${meta.cover ? `<img src="${meta.cover}" />` : '<div class="mah-placeholder">Sem Capa</div>'}
            </div>
            <button class="mah-btn-save" id="mah-cover-trigger-btn" style="margin-top:0;">${meta.cover ? 'Trocar Capa' : 'Adicionar Capa'}</button>
            ${meta.cover ? '<button class="mah-btn-save" id="mah-cover-remove-btn" style="margin-top:8px; background: rgba(239,68,68,0.3) !important; border-color: rgba(239,68,68,0.5) !important;">Remover Capa</button>' : ''}
            <input type="file" id="mah-cover-input" accept="image/*" style="display:none">
            <label>Título da Obra</label> <input type="text" id="mah-title" value="${meta.title || ''}">
            <label>Autor</label> <input type="text" id="mah-author" value="${meta.author || ''}">
            <label>Formato</label>
            <select id="mah-format">
                <option value="A5" ${meta.format === 'A5' ? 'selected' : ''}>A5 (Livro Padrão)</option>
                <option value="A4" ${meta.format === 'A4' ? 'selected' : ''}>A4 (Documento)</option>
                <option value="Kindle" ${meta.format === 'Kindle' ? 'selected' : ''}>Kindle (Ebook)</option>
                <option value="6x9" ${meta.format === '6x9' ? 'selected' : ''}>6" x 9" (Amazon KDP)</option>
            </select>
            <label>Sinopse</label> <textarea id="mah-synopsis">${meta.synopsis || ''}</textarea>
            <button class="mah-btn-save" id="mah-save-settings-btn">Salvar</button>
        </div>`;

    document.getElementById('mah-cover-trigger-btn').onclick = () => document.getElementById('mah-cover-input').click();
    const removeBtn = document.getElementById('mah-cover-remove-btn');
    if (removeBtn) removeBtn.onclick = removeCover;

    document.getElementById('mah-cover-input').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (evt) => {
                const docId = window.location.href.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || 'unknown';
                const meta = JSON.parse(localStorage.getItem(`mah_meta_${docId}`) || '{}');
                meta.cover = evt.target.result;
                localStorage.setItem(`mah_meta_${docId}`, JSON.stringify(meta));
                insertCoverImage(evt.target.result);
                renderSettingsForm();
                showToast('Capa processada!');
            };
            reader.readAsDataURL(file);
        }
    });
    document.getElementById('mah-save-settings-btn').onclick = saveSettingsData;
}

function removeCover() {
    const docId = window.location.href.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || 'unknown';
    const meta = JSON.parse(localStorage.getItem(`mah_meta_${docId}`) || '{}');
    delete meta.cover;
    localStorage.setItem(`mah_meta_${docId}`, JSON.stringify(meta));
    renderSettingsForm();
    showToast('Capa removida!');
}

function insertCoverImage(imageData) {
    const editor = document.querySelector('.kix-appview-editor');
    if (!editor) return;
    const rect = editor.getBoundingClientRect();
    editor.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window, clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 }));
    editor.focus();
    setTimeout(() => {
        try {
            const firstChild = editor.firstChild;
            if (firstChild) {
                const range = document.createRange();
                range.setStart(firstChild, 0);
                range.collapse(true);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
            document.execCommand('insertImage', false, imageData);
            showToast('Capa inserida no início do documento!');
        } catch (e) {
            console.error('Erro ao inserir capa:', e);
            showToast('Erro ao inserir capa.');
        }
    }, 300);
}

function saveSettingsData() {
    const docId = window.location.href.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || 'unknown';
    const meta = {
        title: document.getElementById('mah-title').value,
        author: document.getElementById('mah-author').value,
        format: document.getElementById('mah-format').value,
        synopsis: document.getElementById('mah-synopsis').value
    };
    const existing = JSON.parse(localStorage.getItem(`mah_meta_${docId}`) || '{}');
    localStorage.setItem(`mah_meta_${docId}`, JSON.stringify({...existing, ...meta}));
    showToast('Configurações salvas com sucesso!');
    toggleSection('mahscript-settings-section');
}

class MahScriptPanel {
    constructor() {
        this.panel = null;
        this.docId = window.location.href.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || 'unknown_doc';
        this.chapters = [];
        this.observer = null;
        this.init();
    }
    init() {
        this.createPanelStructure();
        this.startDocumentObserver();
        setTimeout(() => this.adjustPosition(), 1000);
        const ruler = document.querySelector('.kix-ruler');
        if (ruler) { this.rulerObserver = new ResizeObserver(() => this.adjustPosition()); this.rulerObserver.observe(ruler); }
    }

    createPanelStructure() {
        if (document.getElementById('mahscript-docs-chapter-panel')) return;
        this.panel = document.createElement('aside');
        this.panel.id = 'mahscript-docs-chapter-panel';
        this.panel.innerHTML = `
            <div class="mahscript-chapter-header-row">
                <div class="mahscript-chapter-header-title">Capítulos</div>
                <button class="mahscript-chapter-add" id="mahscript-add-chapter" title="Adicionar capítulo">+</button>
            </div>
            <div id="mahscript-inline-prompt" style="display: none;">
                <input type="text" id="mahscript-prompt-input" placeholder="Nome do capítulo...">
                <div class="mahscript-prompt-actions">
                    <button id="mahscript-prompt-cancel" class="mahscript-prompt-btn">Cancelar</button>
                    <button id="mahscript-prompt-ok" class="mahscript-prompt-btn">OK</button>
                </div>
            </div>
            <div id="mahscript-chapters-area" style="display: none;">
                <div id="mahscript-chapter-list"></div>
            </div>
            <div id="mahscript-skins-section" style="display: none;">
                <h3 class="mahscript-skins-title">Skins</h3>
                <div id="mahscript-skins-list"></div>
            </div>
            <div id="mahscript-settings-section" style="display: none;"></div>
        `;
        document.body.appendChild(this.panel);
        this.bindEvents();
    }

    adjustPosition() {
        if (!this.panel) return;
        const ruler = document.querySelector('.kix-ruler');
        let topOffset = 120;
        if (ruler) {
            const rect = ruler.getBoundingClientRect();
            topOffset = Math.round(rect.bottom) + 2;
        }
        this.panel.style.top = `${topOffset}px`;
        this.panel.style.height = `calc(100vh - ${topOffset}px)`;
    }

    startDocumentObserver() {
        const editor = document.querySelector('.kix-appview-editor');
        if (!editor) return;
        this.observer = new MutationObserver(() => { clearTimeout(this.scanTimeout); this.scanTimeout = setTimeout(() => this.scanChapters(), 1500); });
        this.observer.observe(editor, { childList: true, subtree: true, characterData: true });
    }

    scanChapters() {
        const headings = document.querySelectorAll('[aria-level="1"], [aria-level="2"]');
        const newChapters = Array.from(headings).map((el, i) => {
            let title = (el.innerText || el.textContent || '').trim();
            if (title.length < 2) return null;
            return { id: `h_${i}`, title: title, level: el.getAttribute('aria-level') || '1', element: el };
        }).filter(c => c !== null);

        const currentTitles = this.chapters.map(c => c.title).join(',');
        const newTitles = newChapters.map(c => c.title).join(',');

        if (currentTitles !== newTitles) {
            this.chapters = newChapters;
            this.render();
        }
    }

    render() {
        const container = document.getElementById('mahscript-chapter-list');
        if(!container) return;
        if(this.chapters.length === 0) {
            container.innerHTML = `<div class="mahscript-chapter-empty">Nenhum capítulo detectado.<br>Use <b>Título 1</b> ou <b>Título 2</b> no Docs.</div>`;
            return;
        }
        let html = '';
        this.chapters.forEach(chap => {
            const indent = chap.level === '2' ? 'margin-left: 15px; font-size: 0.9em; opacity: 0.7;' : '';
            html += `<div class="mahscript-chapter-item" style="${indent}" data-id="${chap.id}" title="Ir para: ${chap.title}">
                <span class="mahscript-chapter-title-text">${chap.title}</span>
            </div>`;
        });
        container.innerHTML = html;
    }

    updateTheme() { this.render(); }

    bindEvents() {
        const promptBox = document.getElementById('mahscript-inline-prompt');
        const promptInput = document.getElementById('mahscript-prompt-input');
        const promptOk = document.getElementById('mahscript-prompt-ok');
        const promptCancel = document.getElementById('mahscript-prompt-cancel');

        document.getElementById('mahscript-add-chapter').onclick = () => {
            promptBox.style.display = 'block';
            promptInput.value = `Capítulo ${this.chapters.length + 1}`;
            promptInput.focus();
            promptInput.select();
        };

        const submitChapter = () => {
            const title = promptInput.value.trim();
            if (title) {
                this.insertTextInDocs(title, true);
                setTimeout(() => this.scanChapters(), 1500);
            }
            promptBox.style.display = 'none';
        };

        promptOk.onclick = submitChapter;
        promptCancel.onclick = () => { promptBox.style.display = 'none'; };
        promptInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') submitChapter(); });

        document.querySelectorAll('.mahscript-chapter-item').forEach(card => {
            card.onclick = (e) => {
                if (e.target.closest('button')) return;
                const id = card.getAttribute('data-id');
                const ch = this.chapters.find(c => c.id === id);
                if (ch && ch.element) {
                    ch.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    ch.element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                }
            };
        });
    }

    insertTextInDocs(text, isChapter = false) {
        const editor = document.querySelector('.kix-appview-editor') || document.querySelector('[contenteditable="true"]');
        if (!editor) return;
        const rect = editor.getBoundingClientRect();
        const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true, view: window, clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 });
        editor.dispatchEvent(clickEvent);
        editor.focus();

        setTimeout(() => {
            try {
                if (isChapter) {
                    editor.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, ctrlKey: true, bubbles: true }));
                    editor.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter', keyCode: 13, ctrlKey: true, bubbles: true }));
                    editor.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', keyCode: 13, ctrlKey: true, bubbles: true }));
                }
                const success = document.execCommand('insertText', false, text);
                if (success) return;
            } catch (e) {}

            try {
                const clipboardData = new DataTransfer();
                clipboardData.setData('text/plain', isChapter ? `\n\n${text}\n\n` : text);
                const pasteEvent = new ClipboardEvent('paste', { bubbles: true, cancelable: true, clipboardData: clipboardData });
                editor.dispatchEvent(pasteEvent);
            } catch (e) { console.error("Falha ao inserir texto", e); }
        }, 150);
    }
}

function boot() {
    if (!location.hostname.includes("docs.google.com")) return;
    applyMahSkin(currentSkin);
    window.mahPanelInstance = new MahScriptPanel();
}
if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", boot); } else { boot(); }
chrome.runtime.onMessage.addListener((msg) => { if (msg?.type === "applySkin") applyMahSkin(msg.skin); });
document.addEventListener('click', (e) => {
    if (!e.target.closest('#mahscript-docs-chapter-panel') && !e.target.closest('.mahscript-native-btn')) {
        const panel = document.getElementById('mahscript-docs-chapter-panel');
        if (panel) panel.style.setProperty('display', 'none', 'important');
        
        ['mahscript-chapters-area', 'mahscript-skins-section', 'mahscript-settings-section'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        const header = document.querySelector('.mahscript-chapter-header-row');
        const prompt = document.getElementById('mahscript-inline-prompt');
        if (header) header.style.display = 'none';
        if (prompt) prompt.style.display = 'none';
    }
});