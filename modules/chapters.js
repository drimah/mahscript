console.log("mahscript chapters.js v2.0 - Título grande + renomear capítulo");

(function () {
    const STORAGE_KEY = "mahscript_chapters_" + getDocId();

    function getDocId() {
        return window.location.href.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || "unknown_doc";
    }

    function getTheme() {
        const skin = localStorage.getItem("mahscript_skin") || "black";
        if (typeof mahThemes !== "undefined" && mahThemes[skin]) return mahThemes[skin];
        return { main: "#000000", border: "#333333" };
    }

    function getChapters() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    }

    function saveChapters(chapters) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(chapters));
    }

    function showToastSafe(msg) {
        if (typeof showToast === "function") showToast(msg);
        else console.log(msg);
    }

    function escapeHtml(value) {
        return String(value || "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
    }

    function normalizeTitle(title) {
        return String(title || "").trim().toUpperCase();
    }

    function injectChapterCSS() {
        const t = getTheme();

        document.getElementById("mahscript-chapters-module-style")?.remove();

        const style = document.createElement("style");
        style.id = "mahscript-chapters-module-style";
        style.textContent = `
            #mahscript-chapters-area { padding: 0 !important; }

            #mahscript-chapters-module {
                width: 100% !important;
                height: 100% !important;
                box-sizing: border-box !important;
                font-family: Arial, Roboto, sans-serif !important;
                color: #ffffff !important;
                display: flex !important;
                flex-direction: column !important;
            }

            .mah-chapters-top {
                height: 52px !important;
                min-height: 52px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                padding: 0 18px !important;
                border-bottom: 1px solid rgba(255,255,255,0.15) !important;
                background: rgba(0,0,0,0.18) !important;
                box-sizing: border-box !important;
            }

            .mah-chapters-title {
                color: #ffffff !important;
                font-size: 15px !important;
                font-weight: 500 !important;
                letter-spacing: 0.3px !important;
            }

            #mah-chapter-add-btn {
                width: 30px !important;
                height: 30px !important;
                border-radius: 50% !important;
                border: none !important;
                background: rgba(255,255,255,0.16) !important;
                color: #ffffff !important;
                font-size: 22px !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 0 !important;
            }

            #mah-chapter-add-btn:hover {
                background: rgba(255,255,255,0.28) !important;
            }

            #mah-chapters-list {
                padding: 12px !important;
                overflow-y: auto !important;
                flex: 1 !important;
                box-sizing: border-box !important;
            }

            .mah-chapter-empty {
                color: rgba(255,255,255,0.8) !important;
                font-size: 13px !important;
                font-style: italic !important;
                text-align: center !important;
                line-height: 1.45 !important;
                padding: 28px 18px !important;
            }

            .mah-chapter-row {
                min-height: 42px !important;
                border-radius: 9px !important;
                background: rgba(255,255,255,0.08) !important;
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
                padding: 7px 8px 7px 12px !important;
                margin-bottom: 7px !important;
                box-sizing: border-box !important;
                border: 1px solid rgba(255,255,255,0.08) !important;
            }

            .mah-chapter-row:hover {
                background: rgba(255,255,255,0.14) !important;
            }

            .mah-chapter-name {
                flex: 1 !important;
                color: #ffffff !important;
                font-size: 13px !important;
                white-space: nowrap !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                cursor: pointer !important;
            }

            .mah-chapter-action {
                width: 24px !important;
                height: 24px !important;
                border: none !important;
                border-radius: 6px !important;
                background: rgba(255,255,255,0.10) !important;
                color: #ffffff !important;
                cursor: pointer !important;
                font-size: 13px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 0 !important;
            }

            .mah-chapter-action:hover {
                background: rgba(255,255,255,0.22) !important;
            }

            #mah-chapter-modal-backdrop {
                position: fixed !important;
                inset: 0 !important;
                background: rgba(0,0,0,0.35) !important;
                z-index: 99999999 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-family: Arial, Roboto, sans-serif !important;
            }

            #mah-chapter-modal {
                width: 380px !important;
                background: #ffffff !important;
                color: #202124 !important;
                border-radius: 14px !important;
                box-shadow: 0 20px 60px rgba(0,0,0,0.35) !important;
                overflow: hidden !important;
            }

            .mah-modal-top {
                padding: 18px 22px !important;
                background: ${t.main} !important;
                border-bottom: 1px solid ${t.border} !important;
                color: #ffffff !important;
                font-size: 15px !important;
                font-weight: 500 !important;
            }

            .mah-modal-body {
                padding: 20px 22px !important;
            }

            .mah-modal-body label,
            .mah-modal-body p {
                display: block !important;
                color: #202124 !important;
                font-size: 13px !important;
                margin: 0 0 8px 0 !important;
                line-height: 1.45 !important;
            }

            #mah-chapter-modal-input {
                width: 100% !important;
                height: 40px !important;
                border-radius: 8px !important;
                border: 1px solid #c7c7c7 !important;
                padding: 0 12px !important;
                font-size: 14px !important;
                color: #000000 !important;
                background: #ffffff !important;
                box-sizing: border-box !important;
                outline: none !important;
            }

            #mah-chapter-modal-input:focus {
                border-color: ${t.main} !important;
                box-shadow: 0 0 0 2px rgba(0,0,0,0.12) !important;
            }

            .mah-modal-actions {
                display: flex !important;
                justify-content: flex-end !important;
                gap: 10px !important;
                padding: 0 22px 20px 22px !important;
            }

            .mah-modal-btn {
                height: 36px !important;
                padding: 0 18px !important;
                border-radius: 999px !important;
                border: none !important;
                cursor: pointer !important;
                font-size: 13px !important;
            }

            .mah-modal-cancel {
                background: #f1f1f1 !important;
                color: #333333 !important;
            }

            .mah-modal-ok {
                background: ${t.main} !important;
                color: #ffffff !important;
            }

            .mah-modal-danger {
                background: #dc2626 !important;
                color: #ffffff !important;
            }
        `;

        document.documentElement.appendChild(style);
    }

    function ensureChapterUI() {
        const area = document.getElementById("mahscript-chapters-area");
        if (!area) return;

        const oldHeader = document.querySelector(".mahscript-chapter-header-row");
        if (oldHeader) oldHeader.style.display = "none";

        injectChapterCSS();

        area.innerHTML = `
            <div id="mahscript-chapters-module">
                <div class="mah-chapters-top">
                    <div class="mah-chapters-title">Capítulos</div>
                    <button id="mah-chapter-add-btn" title="Adicionar capítulo">+</button>
                </div>
                <div id="mah-chapters-list"></div>
            </div>
        `;

        bindChapterEvents();
        renderChapterList();
    }

    function openInputModal(title, label, defaultValue, callback) {
        injectChapterCSS();
        document.getElementById("mah-chapter-modal-backdrop")?.remove();

        const backdrop = document.createElement("div");
        backdrop.id = "mah-chapter-modal-backdrop";

        backdrop.innerHTML = `
            <div id="mah-chapter-modal">
                <div class="mah-modal-top">${escapeHtml(title)}</div>
                <div class="mah-modal-body">
                    <label>${escapeHtml(label)}</label>
                    <input id="mah-chapter-modal-input" type="text" value="${escapeHtml(defaultValue || "")}">
                </div>
                <div class="mah-modal-actions">
                    <button class="mah-modal-btn mah-modal-cancel" id="mah-modal-cancel">Cancelar</button>
                    <button class="mah-modal-btn mah-modal-ok" id="mah-modal-ok">OK</button>
                </div>
            </div>
        `;

        document.body.appendChild(backdrop);

        const input = document.getElementById("mah-chapter-modal-input");

        setTimeout(() => {
            input.focus();
            input.select();
        }, 50);

        function finish() {
            const value = input.value.trim();
            if (!value) return;
            backdrop.remove();
            callback(value);
        }

        document.getElementById("mah-modal-ok").onclick = finish;
        document.getElementById("mah-modal-cancel").onclick = () => backdrop.remove();

        input.addEventListener("keydown", e => {
            if (e.key === "Enter") finish();
            if (e.key === "Escape") backdrop.remove();
        });
    }

    function openConfirmModal(title, message, callback) {
        injectChapterCSS();
        document.getElementById("mah-chapter-modal-backdrop")?.remove();

        const backdrop = document.createElement("div");
        backdrop.id = "mah-chapter-modal-backdrop";

        backdrop.innerHTML = `
            <div id="mah-chapter-modal">
                <div class="mah-modal-top">${escapeHtml(title)}</div>
                <div class="mah-modal-body">
                    <p>${escapeHtml(message)}</p>
                </div>
                <div class="mah-modal-actions">
                    <button class="mah-modal-btn mah-modal-cancel" id="mah-modal-cancel">Cancelar</button>
                    <button class="mah-modal-btn mah-modal-danger" id="mah-modal-ok">Excluir</button>
                </div>
            </div>
        `;

        document.body.appendChild(backdrop);

        document.getElementById("mah-modal-cancel").onclick = () => backdrop.remove();
        document.getElementById("mah-modal-ok").onclick = () => {
            backdrop.remove();
            callback();
        };
    }

    function bindChapterEvents() {
        const addBtn = document.getElementById("mah-chapter-add-btn");
        if (!addBtn) return;

        addBtn.onclick = () => {
            openInputModal("Novo capítulo", "Nome do capítulo", "", title => {
                createChapter(title);
            });
        };
    }

    function createChapter(title) {
        const chapters = getChapters();

        chapters.push({
            id: Date.now(),
            title: normalizeTitle(title)
        });

        saveChapters(chapters);
        renderChapterList();

        insertChapterIntoDocument(normalizeTitle(title));

        showToastSafe("Capítulo criado.");
    }

    function renameChapter(id) {
        const chapters = getChapters();
        const chapter = chapters.find(c => c.id === id);
        if (!chapter) return;

        openInputModal("Renomear capítulo", "Novo nome do capítulo", chapter.title, newTitle => {
            const oldTitle = chapter.title;
            const normalizedNewTitle = normalizeTitle(newTitle);

            chapter.title = normalizedNewTitle;
            saveChapters(chapters);
            renderChapterList();

            showToastSafe("Capítulo renomeado no gerenciador.");

            attemptRenameInDocument(oldTitle, normalizedNewTitle);
        });
    }

    function deleteChapter(id) {
        const chapters = getChapters();
        const chapter = chapters.find(c => c.id === id);
        if (!chapter) return;

        openConfirmModal("Excluir capítulo", `Excluir o capítulo "${chapter.title}" do gerenciador?`, () => {
            saveChapters(chapters.filter(c => c.id !== id));
            renderChapterList();
            showToastSafe("Capítulo excluído do gerenciador.");
        });
    }

    function renderChapterList() {
        const list = document.getElementById("mah-chapters-list");
        if (!list) return;

        const chapters = getChapters();

        if (!chapters.length) {
            list.innerHTML = `
                <div class="mah-chapter-empty">
                    Nenhum capítulo criado.<br>
                    Clique em + para inserir um capítulo no texto.
                </div>
            `;
            return;
        }

        list.innerHTML = chapters.map(chapter => `
            <div class="mah-chapter-row" data-id="${chapter.id}">
                <div class="mah-chapter-name" title="${escapeHtml(chapter.title)}">
                    ${escapeHtml(chapter.title)}
                </div>
                <button class="mah-chapter-action mah-rename" title="Renomear">✎</button>
                <button class="mah-chapter-action mah-delete" title="Excluir">×</button>
            </div>
        `).join("");

        list.querySelectorAll(".mah-chapter-row").forEach(row => {
            const id = Number(row.dataset.id);

            row.querySelector(".mah-rename").onclick = e => {
                e.stopPropagation();
                renameChapter(id);
            };

            row.querySelector(".mah-delete").onclick = e => {
                e.stopPropagation();
                deleteChapter(id);
            };
        });
    }

    function getEditor() {
        return document.querySelector(".kix-appview-editor") ||
               document.querySelector("[contenteditable='true']");
    }

    function getTypingTarget() {
        const iframe = document.querySelector(".docs-texteventtarget-iframe");

        try {
            if (iframe && iframe.contentDocument) {
                return iframe.contentDocument.activeElement ||
                       iframe.contentDocument.body ||
                       iframe.contentDocument.documentElement;
            }
        } catch (e) {}

        return document.activeElement || getEditor() || document.body;
    }

    function clickEditor() {
        const editor = getEditor();
        if (!editor) return false;

        const rect = editor.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const target = document.elementFromPoint(x, y) || editor;

        ["mousedown", "mouseup", "click"].forEach(type => {
            target.dispatchEvent(new MouseEvent(type, {
                bubbles: true,
                cancelable: true,
                view: window,
                clientX: x,
                clientY: y
            }));
        });

        try { target.focus(); } catch (e) {}
        try { editor.focus(); } catch (e) {}

        return true;
    }

    function sendKey(target, key, options = {}) {
        const char = key.length === 1 ? key : "";
        const code = char ? "Key" + char.toUpperCase() : key;
        const keyCode = char ? char.toUpperCase().charCodeAt(0) : (key === "Enter" ? 13 : 0);

        ["keydown", "keypress", "keyup"].forEach(type => {
            const evt = new KeyboardEvent(type, {
                key,
                code,
                keyCode,
                which: keyCode,
                charCode: type === "keypress" ? keyCode : 0,
                bubbles: true,
                cancelable: true,
                ctrlKey: !!options.ctrlKey,
                altKey: !!options.altKey,
                shiftKey: !!options.shiftKey,
                metaKey: !!options.metaKey
            });

            try { target.dispatchEvent(evt); } catch (e) {}
            try { document.dispatchEvent(evt); } catch (e) {}
        });
    }

    function sendTextInput(target, text) {
        try {
            target.dispatchEvent(new InputEvent("beforeinput", {
                bubbles: true,
                cancelable: true,
                inputType: "insertText",
                data: text
            }));
        } catch (e) {}

        try {
            target.dispatchEvent(new InputEvent("input", {
                bubbles: true,
                cancelable: true,
                inputType: "insertText",
                data: text
            }));
        } catch (e) {}
    }

    function sendCtrlEnter() {
        const target = getTypingTarget();
        sendKey(target, "Enter", { ctrlKey: true });
    }

    function sendHeadingShortcut() {
        const target = getTypingTarget();

        sendKey(target, "1", {
            ctrlKey: true,
            altKey: true
        });
    }

    function sendNormalTextShortcut() {
        const target = getTypingTarget();

        sendKey(target, "0", {
            ctrlKey: true,
            altKey: true
        });
    }

    function typeTextLikeKeyboard(text) {
        const target = getTypingTarget();

        for (const char of text) {
            if (char === "\n") {
                sendKey(target, "Enter");
            } else {
                sendKey(target, char);
                sendTextInput(target, char);
            }
        }
    }

    function insertChapterIntoDocument(title) {
        const editor = getEditor();

        if (!editor) {
            showToastSafe("Editor do Google Docs não encontrado.");
            return;
        }

        clickEditor();

        setTimeout(() => {
            sendCtrlEnter();

            setTimeout(() => {
                clickEditor();

                setTimeout(() => {
                    sendHeadingShortcut();

                    setTimeout(() => {
                        typeTextLikeKeyboard(title + "\n\n");

                        setTimeout(() => {
                            sendNormalTextShortcut();

                            try {
                                if (window.mahPanelInstance && typeof window.mahPanelInstance.syncMirror === "function") {
                                    setTimeout(() => window.mahPanelInstance.syncMirror(), 1000);
                                }
                            } catch (e) {}

                            showToastSafe("Título do capítulo inserido.");
                        }, 300);
                    }, 300);
                }, 450);
            }, 700);
        }, 250);
    }

    function attemptRenameInDocument(oldTitle, newTitle) {
        showToastSafe("Nome alterado no gerenciador. Para alterar no texto já inserido, edite o título diretamente no documento.");
    }

    const timer = setInterval(() => {
        const area = document.getElementById("mahscript-chapters-area");
        if (area) {
            clearInterval(timer);
            ensureChapterUI();
        }
    }, 500);

    window.mahscriptRenderChapters = ensureChapterUI;
})();