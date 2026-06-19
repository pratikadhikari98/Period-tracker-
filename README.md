# 📚 पिरेड ट्र्याकर — PWA

**श्री दुर्गा वैदिक संस्कृत विद्यापीठ**  
कक्षा ६–१२ को रियल-टाइम पिरेड ट्र्याकर

---

## 🌐 Live URL
```
https://<your-username>.github.io/<repo-name>/
```

---

## 📁 Files Structure

```
period-tracker/
│
├── index.html       ← मुख्य App (सबै HTML + CSS + JS)
├── manifest.json    ← PWA manifest (install को लागि)
├── sw.js            ← Service Worker (offline support)
├── README.md        ← यो file
│
└── icons/           ← App icons (तल हेर्नुहोस्)
    ├── icon-192.png
    └── icon-512.png
```

---

## 🚀 GitHub Pages मा राख्ने तरिका

### Step 1 — Repository बनाउनुहोस्
```bash
# नयाँ repo बनाउनुहोस् (e.g. "period-tracker")
# GitHub.com मा जानुहोस् → New Repository → Public
```

### Step 2 — Files upload गर्नुहोस्
```bash
git init
git add .
git commit -m "Initial: पिरेड ट्र्याकर PWA"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### Step 3 — GitHub Pages ON गर्नुहोस्
```
Repo Settings → Pages → Source: Deploy from branch
Branch: main / Root (/)
Save → केही मिनेटमा Live हुन्छ
```

---

## 📱 App Install (Home Screen मा थप्ने)

### Android (Chrome):
1. Browser मा URL खोल्नुहोस्
2. **"Install गर्नुहोस्"** banner देखिन्छ → tap गर्नुहोस्
3. वा: Chrome menu (⋮) → **"Add to Home screen"**

### iPhone (Safari):
1. Safari मा URL खोल्नुहोस्
2. Share button (□↑) → **"Add to Home Screen"**
3. Name confirm गर्नुहोस् → **Add**

### Desktop (Chrome/Edge):
- Address bar को Install icon (⊕) मा click गर्नुहोस्

---

## 🖼️ Icons बनाउने तरिका

`icons/` folder बनाएर यी दुई size को PNG icon राख्नुहोस्:

| File | Size |
|------|------|
| `icon-192.png` | 192×192 px |
| `icon-512.png` | 512×512 px |

**Free tools:**
- [realfavicongenerator.net](https://realfavicongenerator.net)
- [pwabuilder.com](https://pwabuilder.com) → Image Generator

> Icons नभए पनि App काम गर्छ, तर install गर्दा icon देखिँदैन।

---

## ✨ Features

- ⏰ **१२-घण्टे clock** — बिहान / दिउँसो / बेलुकी
- 📲 **PWA** — Home Screen मा Install गर्न सकिन्छ
- 🌐 **Offline** — Internet नभए पनि काम गर्छ
- 🔴 **LIVE indicator** — अहिले चलिरहेको पिरेड
- 👨‍🏫 **शिक्षक view** — कुन शिक्षक कहाँ छन्
- 📋 **पूरा तालिका** — सबै कक्षाको एकसाथ

---

## 🔧 Timetable परिवर्तन गर्ने

`index.html` खोल्नुहोस् र `timetable` object भित्र data update गर्नुहोस्:

```js
const timetable = {
  '६': [
    ['विषय', 'शिक्षक'],  // प्रथम पिरेड
    ['विषय', 'शिक्षक'],  // द्वितीय पिरेड
    // ...७ पिरेडसम्म
  ],
  // अन्य कक्षाहरू...
};
```

---

## 📄 License
विद्यालय आन्तरिक प्रयोगका लागि मात्र।

---

*Developed for श्री दुर्गा वैदिक संस्कृत विद्यापीठ*
