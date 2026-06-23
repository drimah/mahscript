console.log("mahscript module: cover v1.0");

(function () {
    const NS = window.MahScriptCover = window.MahScriptCover || {};

    function getEditor() {
        return document.querySelector('.kix-appview-editor') ||
               document.querySelector('[contenteditable="true"]');
    }

    function fireMouse(el, type, x, y) {
        el.dispatchEvent(new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: x,
            clientY: y
        }));
    }

    function focusEditorAtStart() {
        const editor = getEditor();
        if (!editor) return null;

        const rect = editor.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + 80;

        fireMouse(editor, 'mousedown', x, y);
        fireMouse(editor, 'mouseup', x, y);
        fireMouse(editor, 'click', x, y);
        editor.focus();

        setTimeout(() => {
            try {
                editor.dispatchEvent(new KeyboardEvent('keydown', {
                    key: 'Home',
                    code: 'Home',
                    keyCode: 36,
                    which: 36,
                    ctrlKey: true,
                    bubbles: true,
                    cancelable: true
                }));
                editor.dispatchEvent(new KeyboardEvent('keyup', {
                    key: 'Home',
                    code: 'Home',
                    keyCode: 36,
                    which: 36,
                    ctrlKey: true,
                    bubbles: true,
                    cancelable: true
                }));
            } catch (e) {}
        }, 100);

        return editor;
    }

    function buildCoverHtml(imageData) {
        return `
            <div style="text-align:center; width:100%; page-break-after:always; break-after:page;">
                <img src="${imageData}" style="width:100%; max-width:100%; height:auto; display:block; margin:0 auto;" />
            </div>
            <div style="page-break-before:always; break-before:page;"><br></div>
        `;
    }

    function pasteHtml(editor, html, imageData) {
        try {
            const dt = new DataTransfer();
            dt.setData('text/html', html);
            dt.setData('text/plain', '');

            const pasteEvent = new ClipboardEvent('paste', {
                bubbles: true,
                cancelable: true,
                clipboardData: dt
            });

            return editor.dispatchEvent(pasteEvent);
        } catch (e) {
            return false;
        }
    }

    function insertCoverImage(imageData) {
        const editor = focusEditorAtStart();
        if (!editor) {
            if (typeof showToast === 'function') showToast('Editor do Google Docs não encontrado.');
            return;
        }

        setTimeout(() => {
            const html = buildCoverHtml(imageData);
            let ok = false;

            // 1) Melhor tentativa: simula colagem HTML, que o Google Docs costuma converter para conteúdo real.
            try {
                ok = pasteHtml(editor, html, imageData);
            } catch (e) {
                ok = false;
            }

            // 2) Fallback: insertHTML.
            if (!ok) {
                try {
                    ok = document.execCommand('insertHTML', false, html);
                } catch (e) {
                    ok = false;
                }
            }

            // 3) Fallback final: insertImage.
            if (!ok) {
                try {
                    ok = document.execCommand('insertImage', false, imageData);
                } catch (e) {
                    ok = false;
                }
            }

            if (ok) {
                setTimeout(() => {
                    try {
                        editor.dispatchEvent(new KeyboardEvent('keydown', {
                            key: 'Enter',
                            code: 'Enter',
                            keyCode: 13,
                            which: 13,
                            ctrlKey: true,
                            bubbles: true,
                            cancelable: true
                        }));
                    } catch (e) {}
                }, 300);

                if (typeof showToast === 'function') showToast('Capa inserida no texto do documento.');
            } else {
                if (typeof showToast === 'function') showToast('Não consegui inserir a capa automaticamente. Clique no início do texto e tente de novo.');
            }
        }, 500);
    }

    NS.insertCoverImage = insertCoverImage;

    // Sobrescreve somente a função problemática do content.js original.
    window.insertCoverImage = insertCoverImage;
})();
