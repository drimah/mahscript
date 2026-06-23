console.log("mahscript settings-patch.js v2.1 - Select corrigido");

(function () {
    function injectSettingsCSS() {
        document.getElementById("mahscript-settings-patch-style")?.remove();

        const style = document.createElement("style");
        style.id = "mahscript-settings-patch-style";
        style.textContent = `
            #mahscript-docs-chapter-panel,
            #mahscript-settings-section,
            #mahscript-settings-section *,
            #mahscript-chapters-area,
            #mahscript-chapters-area * {
                box-sizing: border-box !important;
            }

            #mahscript-docs-chapter-panel {
                overflow-x: hidden !important;
            }

            #mahscript-settings-section {
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                max-width: 100% !important;
                overflow-x: hidden !important;
                overflow-y: auto !important;
            }

            #mahscript-settings-section > h3.mahscript-skins-title {
                height: 52px !important;
                min-height: 52px !important;
                display: flex !important;
                align-items: center !important;
                padding: 0 18px !important;
                margin: 0 !important;
                border-bottom: 1px solid rgba(255,255,255,0.15) !important;
                background: rgba(0,0,0,0.18) !important;
                color: #ffffff !important;
                font-size: 15px !important;
                font-weight: 500 !important;
                letter-spacing: 0.3px !important;
                text-transform: none !important;
            }

            #mahscript-settings-section > .mah-form {
                padding: 16px !important;
                width: 100% !important;
                max-width: 100% !important;
                overflow-x: hidden !important;
            }

            #mahscript-settings-section .mah-cover-preview {
                width: 100% !important;
                max-width: 100% !important;
                height: 140px !important;
                border-radius: 9px !important;
                border: 1px dashed rgba(255,255,255,0.18) !important;
                background: rgba(255,255,255,0.06) !important;
                overflow: hidden !important;
            }

            #mahscript-settings-section .mah-cover-preview img {
                max-width: 100% !important;
                max-height: 100% !important;
                object-fit: contain !important;
            }

            #mahscript-settings-section .mah-cover-actions {
                display: flex !important;
                gap: 8px !important;
                width: 100% !important;
                max-width: 100% !important;
                overflow: hidden !important;
            }

            #mahscript-settings-section .mah-btn-save {
                flex: 1 1 0 !important;
                min-width: 0 !important;
                border-radius: 9px !important;
                background: rgba(255,255,255,0.10) !important;
                border: 1px solid rgba(255,255,255,0.18) !important;
                color: #ffffff !important;
                white-space: nowrap !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
            }

            #mahscript-settings-section .mah-btn-save:hover {
                background: rgba(255,255,255,0.18) !important;
            }

            #mahscript-settings-section #mah-cover-remove-btn {
                background: rgba(220,38,38,0.45) !important;
            }

            #mahscript-settings-section .mah-form label {
                color: #ffffff !important;
                font-size: 13px !important;
                font-weight: 400 !important;
            }

            #mahscript-settings-section .mah-form input,
            #mahscript-settings-section .mah-form select,
            #mahscript-settings-section .mah-form textarea {
                width: 100% !important;
                max-width: 100% !important;
                background: #ffffff !important;
                color: #000000 !important;
                -webkit-text-fill-color: #000000 !important;
                border-radius: 6px !important;
                border: none !important;
                overflow-x: hidden !important;
            }

            #mahscript-settings-section .mah-form select {
                appearance: auto !important;
                -webkit-appearance: menulist !important;
            }

            #mahscript-settings-section .mah-form select option {
                background: #ffffff !important;
                color: #000000 !important;
                -webkit-text-fill-color: #000000 !important;
            }

            #mahscript-settings-section .mah-form select option:checked {
                background: #2f6fd1 !important;
                color: #ffffff !important;
                -webkit-text-fill-color: #ffffff !important;
            }

            #mahscript-settings-section .mah-form select option:hover {
                background: #2f6fd1 !important;
                color: #ffffff !important;
                -webkit-text-fill-color: #ffffff !important;
            }

            #mahscript-settings-section .mahscript-theme-box {
                width: 100% !important;
                max-width: 100% !important;
                background: #ffffff !important;
                border-radius: 12px !important;
                padding: 12px !important;
                display: grid !important;
                grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
                gap: 8px !important;
                justify-items: center !important;
                overflow: hidden !important;
            }

            #mahscript-settings-section .mahscript-theme-circle {
                width: 23px !important;
                height: 23px !important;
                border-radius: 50% !important;
                flex: none !important;
            }
        `;

        document.documentElement.appendChild(style);
    }

    function normalizeSettings() {
        const section = document.getElementById("mahscript-settings-section");
        if (!section) return;

        const wrappers = section.querySelectorAll("#mahscript-settings-module, #mahscript-settings-real");
        wrappers.forEach(wrapper => {
            const body =
                wrapper.querySelector(".mah-settings-body") ||
                wrapper.querySelector(".mah-settings-real-body");

            if (body) section.innerHTML = body.innerHTML;
        });

        section.querySelectorAll("h3.mahscript-skins-title").forEach((h3, index) => {
            if (index > 0) h3.remove();
        });

        let title = section.querySelector("h3.mahscript-skins-title");

        if (!title) {
            title = document.createElement("h3");
            title.className = "mahscript-skins-title";
            title.textContent = "Configurações";
            section.prepend(title);
        } else {
            title.textContent = "Configurações";
        }

        injectSettingsCSS();
    }

    function patchRenderSettingsForm() {
        if (window.mahscriptSettingsPatchStableV2) return;
        if (typeof renderSettingsForm !== "function") return;

        window.mahscriptSettingsPatchStableV2 = true;

        const originalRender = renderSettingsForm;

        window.renderSettingsForm = function () {
            originalRender();
            normalizeSettings();
        };

        try {
            renderSettingsForm = window.renderSettingsForm;
        } catch (e) {}
    }

    function patchApplyTheme() {
        if (window.mahscriptApplyThemePatchedV2) return;
        if (typeof applyMahSkin !== "function") return;

        window.mahscriptApplyThemePatchedV2 = true;

        const originalApply = applyMahSkin;

        window.applyMahSkin = function (skinName) {
            originalApply(skinName);

            injectSettingsCSS();

            const section = document.getElementById("mahscript-settings-section");
            if (section && section.style.display === "block") {
                normalizeSettings();
            }
        };

        try {
            applyMahSkin = window.applyMahSkin;
        } catch (e) {}
    }

    const boot = setInterval(() => {
        injectSettingsCSS();

        if (typeof renderSettingsForm === "function") patchRenderSettingsForm();
        if (typeof applyMahSkin === "function") patchApplyTheme();

        if (window.mahscriptSettingsPatchStableV2 && window.mahscriptApplyThemePatchedV2) {
            clearInterval(boot);
        }
    }, 200);
})();