let locked = false;

function insertLockButton() {
  const controls = document.querySelector(".ytp-right-controls");

  if (!controls || document.getElementById("yt-lock-btn")) return;

  const btn = document.createElement("button");
  btn.id = "yt-lock-btn";
  btn.title = "Toggle Lock";
  btn.style.width = "32px";
  btn.style.height = "32px";
  btn.style.background = "none";
  btn.style.border = "none";
  btn.style.marginRight = "8px";
  btn.style.cursor = "pointer";
  btn.style.fontSize = "18px";
  btn.innerHTML = "🔒"; // locked by default
  btn.onclick = toggleLock;

  controls.insertBefore(btn, controls.firstChild);
}

function toggleLock() {
  locked = !locked;
  const btn = document.getElementById("yt-lock-btn");
  if (btn) {
    btn.innerHTML = locked ? "🔓" : "🔒";
  }

  if (locked) {
    applyOverlay();
  } else {
    removeOverlay();
  }
}

function applyOverlay() {
  let overlay = document.createElement("div");
  overlay.id = "yt-lock-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.zIndex = "9999";
  overlay.style.pointerEvents = "all"; // block mouse
  overlay.style.backgroundColor = "transparent";
  overlay.style.userSelect = "none";
  overlay.style.overflow = "hidden";
  overlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(overlay);
}

function removeOverlay() {
  const overlay = document.getElementById("yt-lock-overlay");
  if (overlay) overlay.remove();
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  // Always allow Q to toggle lock/unlock
  if (key === "q") {
    e.preventDefault();
    e.stopPropagation();
    toggleLock();
    return;
  }

  // If locked, only allow space/k for play/pause
  if (locked) {
    if ([" ", "k"].includes(key)) {
      e.preventDefault();
      e.stopPropagation();

      // Ensure body has focus
      if (document.activeElement !== document.body) {
        document.body.focus();
      }

      const video = document.querySelector("video");
      if (video) {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    } else {
      // Block everything else
      e.preventDefault();
      e.stopPropagation();
    }
  }
});

// Monitor for YouTube DOM changes and insert lock
function init() {
  const observer = new MutationObserver(() => {
    insertLockButton();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

window.addEventListener("load", () => {
  if (window.location.hostname.includes("youtube.com")) {
    init();
  }
});
