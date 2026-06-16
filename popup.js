function sendSkin(skin) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || !tabs.length) return;

    chrome.tabs.sendMessage(tabs[0].id, {
      type: "applySkin",
      skin
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const map = {
    "btn-black": "black",
    "btn-darkgray": "darkgray",
    "btn-midnight": "midnight",
    "btn-forest": "forest",
    "btn-purple": "purple",
    "btn-coffee": "coffee",
    "btn-silver": "silver",
    "btn-default": "default"
  };

  Object.entries(map).forEach(([id, skin]) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => sendSkin(skin));
    }
  });
});