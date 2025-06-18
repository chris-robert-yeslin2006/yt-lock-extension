# 🔒 YouTube Lock Extension

This Chrome/Brave extension locks the YouTube video player during multitasking, preventing accidental clicks. While locked, only **play/pause** controls (`K` or `Space`) work — perfect for coding, note-taking, or watching long videos without interruptions.

---

![Just Chill and Multitask](https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXFuZjRoMHlmOXI5YmUyZzF2Y205M3hrODhucjY5aHo4bjMwcGVlOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LTbpRwhXhdcOhJQfrd/giphy.gif)

> **Just chill and multitask** 😎🎧

---

## ✨ Features

- ✅ Lock/unlock the YouTube player by pressing `Q`.
- 🔒 While locked:
  - All **mouse interactions are blocked**.
  - Only **`K`** or **`Space`** keys are allowed for play/pause.
- 🧠 Intelligent: Simulates native YouTube shortcuts so it always works.
- ⚙️ Lightweight — no UI, no bloat.

---

## 🧩 How to Install (Developer Mode)

1. Download or clone this repo and extract it.
2. Open Chrome/Brave and go to:  
   `chrome://extensions` or `brave://extensions`
3. Enable **Developer Mode** (top right).
4. Click **"Load unpacked"** and select the extracted folder.
5. Open any YouTube video and press:
   - `Q` → Lock/unlock screen.
   - `K` or `Space` → Play/pause video (only works when locked).

---

## 🔐 Why This Exists

When coding or multitasking, it's easy to accidentally:
- Click on videos.
- Skip ahead or pause unintentionally.
- Lose focus due to minor touches.

This extension **prevents that**, giving full control through keyboard only.

---

## 🧠 Future Improvements (Planned)

- UI toggle next to YouTube's autoplay switch.
- Custom keybinding settings.
- Icon indicator for lock status.
- Option to remember lock state across sessions.

---

## 📦 Tech Used

- Plain JavaScript
- Chrome Extension APIs (Manifest v3)
- Keyboard + Event Simulation

---

## ✅ Permissions

Minimal permissions required:
```json
"permissions": ["scripting", "activeTab"]
📄 License
MIT — use it, improve it, share it. 🎉
