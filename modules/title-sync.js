console.log("mahscript title-sync.js v1.3 - Não trava edição do Título da Obra");

(function () {
    let lock = false;

    function getDocId() {
        return window.location.href.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || "unknown_doc";
    }

    function getMeta() {
        return JSON.parse(localStorage.getItem(`mah_meta_${getDocId()}`) || "{}");
    }

    function saveMeta(meta) {
        localStorage.setItem(`mah_meta_${getDocId()}`, JSON.stringify(meta));
    }

    function getGoogleTitleInput() {
        return document.querySelector(".docs-title-input") || document.querySelector("input.docs-title-input");
    }

    function getGoogleTitle() {
        const input = getGoogleTitleInput();
        return input ? (input.value || "").trim() : "";
    }

    function setGoogleTitle(title) {
        title = (title || "").trim();
        if (!title || lock) return;

        const input = getGoogleTitleInput();
        if (!input) return;

        lock = true;

        input.focus();
        input.value = title;

        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));

        input.dispatchEvent(new KeyboardEvent("keydown", {
            key: "Enter",
            code: "Enter",
            keyCode: 13,
            which: 13,
            bubbles: true
        }));

        input.blur();

        setTimeout(() => {
            lock = false;
        }, 800);
    }

    function syncGoogleToMah() {
        if (lock) return;

        const mahTitle = document.getElementById("mah-title");

        if (mahTitle && document.activeElement === mahTitle) {
            return;
        }

        const googleTitle = getGoogleTitle();
        if (!googleTitle) return;

        const meta = getMeta();

        if (meta.title !== googleTitle) {
            meta.title = googleTitle;
            saveMeta(meta);

            if (mahTitle && mahTitle.value !== googleTitle) {
                mahTitle.value = googleTitle;
            }
        }
    }

    function bindMahTitleInput() {
        const timer = setInterval(() => {
            const mahTitle = document.getElementById("mah-title");
            if (!mahTitle || mahTitle.dataset.mahTitleSync === "1") return;

            mahTitle.dataset.mahTitleSync = "1";

            mahTitle.addEventListener("input", () => {
                const meta = getMeta();
                meta.title = mahTitle.value;
                saveMeta(meta);
            });

            mahTitle.addEventListener("blur", () => {
                setGoogleTitle(mahTitle.value);
            });
        }, 500);
    }

    function start() {
        bindMahTitleInput();

        setInterval(() => {
            syncGoogleToMah();
        }, 1500);
    }

    start();

    window.mahscriptSetGoogleTitle = setGoogleTitle;
})();