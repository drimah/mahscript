document.addEventListener("DOMContentLoaded", () => {
    // Botão para abrir editor standalone
    const openEditorBtn = document.getElementById("btn-open-editor");
    if (openEditorBtn) {
        openEditorBtn.addEventListener("click", () => {
            chrome.tabs.create({ url: chrome.runtime.getURL("manuscript/index.html") });
        });
    }

    // Aplicar skins
    const savedSkin = localStorage.getItem('mahscript_skin') || 'default';
    applySkin(savedSkin);

    document.querySelectorAll('.skin-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const skin = btn.dataset.skin;
            localStorage.setItem('mahscript_skin', skin);
            applySkin(skin);
        });
    });
});

function applySkin(skinName) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs || !tabs.length || !tabs[0].id) return;
        const tabId = tabs[0].id;

        // Remove CSS anterior
        chrome.scripting.removeCSS({
            target: { tabId },
            files: ["content.js"]
        }).catch(() => {});

        // Envia mensagem para o content script
        chrome.tabs.sendMessage(tabId, { type: "applySkin", skin: skinName });
    });
}