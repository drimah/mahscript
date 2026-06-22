console.log("mahscript v6.6 carregado - Tipografia Refinada & Correção de Capa");

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

let currentTheme = localStorage.getItem('mahscript_skin') || 'black';

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
color: #ffffff !important; fill: #ffffff !important; font-weight: 400 !important;
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
font-family: Arial, Roboto, sans-serif !important; font-size: 13px !important; font-weight: 400 !important;
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
#mahscript-delete-modal h3 { margin: 0 0 12px 0 !important; font-size: 16px !important; font-weight: 500 !important; color: #ffffff !important; }
#mahscript-delete-modal p { margin: 0 0 20px 0 !important; font-size: 13px !important; opacity: 0.9 !important; line-height: 1.5 !important; }
.mahscript-modal-actions { display: flex !important; gap: 10px !important; justify-content: flex-end !important; }
.mahscript-modal-btn { padding: 8px 16px !important; border-radius: 6px !important; border: none !important; font-size: 13px !important; font-weight: 400 !important; cursor: pointer !important; transition: opacity 0.2s !important; }
.mahscript-modal-btn:hover { opacity: 0.8 !important; }
#mahscript-delete-cancel { background: rgba(255,255,255,0.1) !important; color: #ffffff !important; }
#mahscript-delete-confirm { background: #ef4444 !important; color: #ffffff !important; }

/* CONFIGURAÇÕES E TEMAS INTEGRADOS */
#mahscript-settings-section { padding: 16px !important; overflow-y: auto !important; max-height: calc(100vh - 200px) !important; }
.mahscript-skins-title { margin: 0 0 12px 0 !important; font-size: 13px !important; letter-spacing: 0.5px !important; color: #ffffff !important; font-weight: 400 !important; text-transform: none !important; }

/* CAIXA BRANCA ARREDONDADA PARA OS TEMAS */
.mahscript-theme-box {
    background-color: #ffffff !important;
    border-radius: 12px !important;
    padding: 12px !important;
    margin-bottom: 16px !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
    display: grid !important;
    grid-template-columns: repeat(6, 1fr) !important;
    gap: 8px !important;
    justify-items: center !important;
}

.mahscript-theme-circle {
    width: 20px !important; height: 20px !important;
    border-radius: 50% !important;
    border: 2px solid transparent !important;
    cursor: pointer !important;
    transition: transform 0.2s ease, border-color 0.2s ease !important;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2) !important;
}
.mahscript-theme-circle:hover { transform: scale(1.2) !important; }
.mahscript-theme-circle.active { 
    border-color: #000000 !important;
    transform: scale(1.1) !important;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #000000 !important;
}

.mah-form label { display: block !important; font-size: 13px !important; color: #ffffff !important; margin-top: 14px !important; margin-bottom: 6px !important; font-weight: 400 !important; text-transform: none !important; }
.mah-form input, .mah-form textarea, .mah-form select { width: 100% !important; padding: 10px 12px !important; border-radius: 6px !important; border: 1px solid ${t.border} !important; background: rgba(255,255,255,0.06) !important; color: #ffffff !important; font-size: 13px !important; box-sizing: border-box !important; outline: none !important; font-family: Arial, Roboto, sans-serif !important; transition: border-color 0.2s !important; }
.mah-form input:focus, .mah-form textarea:focus, .mah-form select:focus { border-color: rgba(255,255,255,0.4) !important; }
.mah-btn-save { margin-top: 18px !important; padding: 10px !important; background: rgba(255,255,255,0.15) !important; color: #ffffff !important; border: 1px solid rgba(255,255,255,0.2) !important; border-radius: 6px !important; cursor: pointer !important; font-weight: 400 !important; width: 100% !important; transition: all 0.2s !important; font-size: 13px !important; letter-spacing: 0.5px !important; }
.mah-btn-save:hover { background: rgba(255,255,255,0.25) !important; }

/* BOTÕES DE CAPA LADO A LADO */
.mah-cover-actions { display: flex !important; gap: 8px !important; margin-bottom: 12px !important; }
.mah-cover-preview { width: 100% !important; height: 140px !important; background: rgba(255,255,255,0.04) !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; overflow: hidden !important; margin-bottom: 12px !important; border: 1px dashed ${t.border} !important; flex-direction: column !important; gap: 10px !important; }
.mah-cover-preview img { max-width: 100% !important; max-height: 100% !important; object-fit: cover !important; }
.mah-placeholder { color: #aaaaaa !important; font-size: 13px !important; }

#mahscript-inline-prompt { padding: 12px 16px !important; border-bottom: 1px solid ${t.border} !important; background: rgba(0,0,0,0.2) !important; }
#mahscript-prompt-input { width: 100% !important; padding: 10px 12px !important; border-radius: 6px !important; border: 1px solid ${t.border} !important; background: rgba(255,255,255,0.06) !important; color: #ffffff !important; font-size: 13px !important; box-sizing: border-box !important; margin-bottom: 10px !important; outline: none !important; }
#mahscript-prompt-input:focus { border-color: rgba(255,255,255,0.4) !important; }
.mahscript-prompt-actions { display: flex !important; gap: 8px !important; justify-content: flex-end !important; }
.mahscript-prompt-btn { padding: 7px 14px !important; border-radius: 6px !important; border: none !important; font-size: 13px !important; font-weight: 400 !important; cursor: pointer !important; transition: opacity 0.2s !important; }
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

/* PAINEL DIREITO FIXO NO ALINHAMENTO EXATO DA BARRA DE FERRAMENTAS */
#mahscript-docs-chapter-panel {
    position: fixed !important; 
    right: 0 !important; 
    width: 282px !important;
    top: 128px !important; 
    height: calc(100vh - 128px) !important;
    z-index: 9999997 !important; 
    background: ${t.main} !important; 
    color: #ffffff !important;
    font-family: Arial, Roboto, sans-serif !important;
    display: flex !important; 
    flex-direction: column !important; 
    overflow: hidden !important;
    border-left: 1px solid ${t.border} !important;
}

/* FORÇA TEXTO BRANCO EM TODO O CONTEÚDO DO PAINEL */
#mahscript-docs-chapter-panel * {
    color: #ffffff !important;
    fill: #ffffff !important;
    stroke: #ffffff !important;
}

.mahscript-chapter-header-row { 
    display: none !important; 
    align-items: center !important; 
    justify-content: space-between !important; 
    padding: 12px 20px !important; 
    color: #ffffff !important; 
    border-bottom: 1px solid ${t.border} !important; 
    background: rgba(0,0,0,0.15) !important; 
}
.mahscript-chapter-header-title { color: #ffffff !important; font-size: 13px !important; font-weight: 400 !important; letter-spacing: 0.5px !important; text-transform: none !important; }
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
    modal.innerHTML = `<h3>Excluir Capítulo</h3><p>Tem certeza que deseja excluir "<strong>${chapterTitle}</strong>"? Esta ação não pode ser desfeita e o capítulo será removido permanentemente do documento.</p><div class="mahscript-modal-actions"><button id="mahscript-delete-cancel" class="mahscript-modal-btn">Cancelar</button><button id="mahscript-delete-confirm" class="mahscript-modal-btn">Excluir Permanentemente</button></div>`;
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
    currentTheme = skinName;
    localStorage.setItem('mahscript_skin', skinName);
    injectNativeButtons();
}

function toggleSection(targetId) {
    const panel = document.getElementById('mahscript-docs-chapter-panel');
    if (!panel) return;
    const sections = ['mahscript-chapters-area', 'mahscript-settings-section'];
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
        target.style.display = 'block';
        
        if (targetId === 'mahscript-chapters-area') {
            if (header) header.style.display = 'flex';
            if(window.mahPanelInstance) window.mahPanelInstance.syncMirror();
        }
        if (targetId === 'mahscript-settings-section') renderSettingsForm();
    } 
}

// FUNÇÃO ATUALIZADA PARA GRID DE TEMAS NA CAIXA BRANCA
function populateThemesList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.entries(mahThemes).forEach(([key, theme]) => {
        const circle = document.createElement("div");
        circle.className = "mahscript-theme-circle";
        circle.style.backgroundColor = theme.main;
        circle.setAttribute("data-theme", key);
        circle.title = "Tema: " + key.charAt(0).toUpperCase() + key.slice(1);
        
        if (key === currentTheme) circle.classList.add("active");
        
        circle.onclick = () => { 
            applyMahSkin(key); 
            document.querySelectorAll('.mahscript-theme-circle').forEach(c => c.classList.remove('active')); 
            circle.classList.add('active'); 
        };
        container.appendChild(circle);
    });
}

function injectNativeButtons() {
    ['mahscript-btn-skins', 'mahscript-btn-settings', 'mahscript-btn-chapters'].forEach(id => { document.getElementById(id)?.remove(); });
    
    const rightArea = document.querySelector(".docs-titlebar-buttons") || document.querySelector(".docs-titlebar-right");
    if (!rightArea) return;
    
    const icons = {
        settings: '<svg class="mahscript-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
        chapters: '<svg class="mahscript-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
    };

    const buttonsHtml = `
     <button id="mahscript-btn-chapters" class="mahscript-native-btn" title="Capítulos">${icons.chapters}</button>
     <button id="mahscript-btn-settings" class="mahscript-native-btn" title="Configurações">${icons.settings}</button>
`;
    rightArea.insertAdjacentHTML('afterbegin', buttonsHtml);

    document.getElementById('mahscript-btn-chapters').onclick = (e) => { e.stopPropagation(); toggleSection('mahscript-chapters-area'); };
    document.getElementById('mahscript-btn-settings').onclick = (e) => { e.stopPropagation(); toggleSection('mahscript-settings-section'); };
}

function renderSettingsForm() {
    const container = document.getElementById("mahscript-settings-section");
    const docId = window.location.href.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || 'unknown';
    const meta = JSON.parse(localStorage.getItem(`mah_meta_${docId}`) || '{}');
    
    // HTML atualizado com botões lado a lado e sem sinopse
    container.innerHTML = `
     <h3 class="mahscript-skins-title">Configurações</h3>
     <div class="mah-form">
         <div class="mah-cover-preview">
           ${meta.cover ? `<img src="${meta.cover}" />` : '<div class="mah-placeholder">Sem Capa</div>'}
         </div>
         
         <!-- BOTÕES LADO A LADO -->
         <div class="mah-cover-actions">
             <button class="mah-btn-save" id="mah-cover-trigger-btn" style="margin-top:0; flex:1;">${meta.cover ? 'Trocar Capa' : 'Adicionar Capa'}</button>
             ${meta.cover ? '<button class="mah-btn-save" id="mah-cover-remove-btn" style="margin-top:0; flex:1; background: rgba(239,68,68,0.3) !important; border-color: rgba(239,68,68,0.5) !important;">Remover Capa</button>' : ''}
         </div>
         
         <input type="file" id="mah-cover-input" accept="image/*" style="display:none">
         
         <label>Título da Obra</label>  <input type="text" id="mah-title" value="${meta.title || ''}">
         <label>Autor</label>  <input type="text" id="mah-author" value="${meta.author || ''}">
         <label>Formato</label>
         <select id="mah-format">
             <option value="A5" ${meta.format === 'A5' ? 'selected' : ''}>A5 (Livro Padrão)</option>
             <option value="A4" ${meta.format === 'A4' ? 'selected' : ''}>A4 (Documento)</option>
             <option value="Kindle" ${meta.format === 'Kindle' ? 'selected' : ''}>Kindle (Ebook)</option>
             <option value="6x9" ${meta.format === '6x9' ? 'selected' : ''}>6" x 9" (Amazon KDP)</option>
         </select>
         
         <!-- SEÇÃO DE TEMAS INTEGRADA -->
         <label style="margin-top: 20px;">Temas</label>
         <div class="mahscript-theme-box" id="settings-theme-selector"></div>
         
         <button class="mah-btn-save" id="mah-save-settings-btn">Salvar</button>
     </div>`;

    populateThemesList('settings-theme-selector');

    document.getElementById('mah-cover-trigger-btn').onclick = () => document.getElementById('mah-cover-input').click();
    const removeBtn = document.getElementById('mah-cover-remove-btn');
    if (removeBtn) removeBtn.onclick = removeCover;

    document.getElementById('mah-cover-input').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // Redimensiona a imagem para garantir compatibilidade com o Visualizador do Docs
            const reader = new FileReader();
            reader.onload = (evt) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    // Limita a largura máxima para evitar falha no upload do Docs
                    const maxWidth = 800;
                    const scale = Math.min(maxWidth / img.width, 1);
                    canvas.width = img.width * scale;
                    canvas.height = img.height * scale;
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    
                    const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    
                    const docId = window.location.href.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || 'unknown';
                    const meta = JSON.parse(localStorage.getItem(`mah_meta_${docId}`) || '{}');
                    meta.cover = resizedDataUrl;
                    localStorage.setItem(`mah_meta_${docId}`, JSON.stringify(meta));
                    
                    insertCoverImage(resizedDataUrl);
                    renderSettingsForm();
                    showToast('Capa processada e otimizada!');
                };
                img.src = evt.target.result;
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
        format: document.getElementById('mah-format').value
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
        this.observer = null;
        this.init();
    }
    init() {
        this.createPanelStructure();
        this.startDocumentObserver();
    }
    createPanelStructure() {
        if (document.getElementById('mahscript-docs-chapter-panel')) return;
        this.panel = document.createElement('aside');
        this.panel.id = 'mahscript-docs-chapter-panel';
        this.panel.innerHTML = `
         <div class="mahscript-chapter-header-row">
             <div class="mahscript-chapter-header-title">Capítulos</div>
             <button class="mahscript-chapter-add" id="mahscript-add-chapter" title="Adicionar guia">+</button>
         </div>
         <div id="mahscript-inline-prompt" style="display: none;">
             <input type="text" id="mahscript-prompt-input" placeholder="Nome da guia...">
             <div class="mahscript-prompt-actions">
                 <button id="mahscript-prompt-cancel" class="mahscript-prompt-btn">Cancelar</button>
                 <button id="mahscript-prompt-ok" class="mahscript-prompt-btn">OK</button>
             </div>
         </div>
         <div id="mahscript-chapters-area" style="display: none;">
             <div id="mahscript-chapter-list"></div>
         </div>
         <div id="mahscript-settings-section" style="display: none;"></div>
    `;
        document.body.appendChild(this.panel);
        this.bindEvents();
    }

    startDocumentObserver() {
        const waitForLeftNav = setInterval(() => {
            const leftNav = document.querySelector('.navigation-widget');
            if (leftNav) {
                clearInterval(waitForLeftNav);
                
                this.leftNavObserver = new MutationObserver(() => { 
                    clearTimeout(this.syncTimeout); 
                    this.syncTimeout = setTimeout(() => {
                        this.syncMirror();
                    }, 300); 
                });
                this.leftNavObserver.observe(leftNav, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });
                
                this.syncMirror();
            }
        }, 500);

        const editor = document.querySelector('.kix-appview-editor');
        if (editor) {
            this.editorObserver = new MutationObserver(() => { 
                clearTimeout(this.scanTimeout); 
                this.scanTimeout = setTimeout(() => {
                    this.syncMirror();
                }, 1500); 
            });
            this.editorObserver.observe(editor, { childList: true, subtree: true, characterData: true });
        }
    }

    syncMirror() {
        const container = document.getElementById('mahscript-chapter-list');
        if(!container) return;

        const nativeOutline = document.querySelector('.outlines-widget-chaptered');
        
        if (!nativeOutline) {
            container.innerHTML = `<div class="mahscript-chapter-empty">Nenhuma guia detectada.<br>Use o botão "+" para criar ou adicione Títulos no Docs.</div>`;
            return;
        }

        const clone = nativeOutline.cloneNode(true);
        clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
        clone.style.width = '100%';
        clone.style.color = '#ffffff'; 
        
        clone.querySelectorAll('[role="treeitem"], .chapter-item-label-and-buttons-container').forEach(item => {
            item.style.cursor = 'pointer';
            item.style.padding = '8px 4px';
            item.style.borderRadius = '6px';
            
            item.onmouseover = () => item.style.backgroundColor = 'rgba(255,255,255,0.1)';
            item.onmouseout = () => item.style.backgroundColor = 'transparent';
            
            item.onclick = (e) => {
                e.stopPropagation();
                const labelText = item.querySelector('.chapter-label-content')?.innerText;
                if (labelText) {
                    const originals = Array.from(document.querySelectorAll('.chapter-item-label-and-buttons-container'));
                    const target = originals.find(o => o.querySelector('.chapter-label-content')?.innerText === labelText);
                    if (target) {
                        target.click();
                        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            };
        });

        container.innerHTML = '';
        container.appendChild(clone);
    }

    bindEvents() {
        const promptBox = document.getElementById('mahscript-inline-prompt');
        const promptInput = document.getElementById('mahscript-prompt-input');
        const promptOk = document.getElementById('mahscript-prompt-ok');
        const promptCancel = document.getElementById('mahscript-prompt-cancel');

        document.getElementById('mahscript-add-chapter').onclick = () => {
            promptBox.style.display = 'block';
            promptInput.value = `Guia ${Math.floor(Math.random() * 100)}`;
            promptInput.focus();
            promptInput.select();
        }; 

        const submitChapter = () => {
            const title = promptInput.value.trim();
            if (title) {
                this.insertTextInDocs(title, true);
                setTimeout(() => this.syncMirror(), 1500);
            }
            promptBox.style.display = 'none';
        };

        promptOk.onclick = submitChapter;
        promptCancel.onclick = () => { promptBox.style.display = 'none'; };
        promptInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') submitChapter(); });
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
    applyMahSkin(currentTheme);
    window.mahPanelInstance = new MahScriptPanel();
}

if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", boot); } else { boot(); }
chrome.runtime.onMessage.addListener((msg) => { if (msg?.type === "applySkin") applyMahSkin(msg.skin); });