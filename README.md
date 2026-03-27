<div align="center">

```
　　 ✦ 　　　　　✦
　✦ 　　　　　　　　✦
　　　　　　　　✦
　　　✦ 　　　　　　　✦
```

#  &nbsp; VamPortfolio &nbsp; 

**a personal portfolio — built in react + vite**

![React](https://img.shields.io/badge/React-18-black?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-black?style=flat-square&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-vanilla-black?style=flat-square&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-black?style=flat-square)

---

_a dark, intimate single-page portfolio with section-based navigation,_
_smooth fade transitions, and a deep crimson aesthetic._

---

</div>

## &nbsp; ✦ &nbsp; about

This is a personal portfolio page built in the style of a **Card** layout — a single card UI with multiple navigable sections, a dark `#030000` background, and deep red accents. Originally commissioned as a freelance project in 2024 and published here with the owner's permission.

---

## &nbsp; ✦ &nbsp; stack

| thing     | what                                        |
| --------- | ------------------------------------------- |
| framework | React 18                                    |
| bundler   | Vite 5                                      |
| styling   | CSS                                         |
| fonts     | Archivo via Google Fonts                    |
| icons     | inline SVG sprites                          |
| routing   | hash-based (`#home`, `#about`, `#interest`) |

---

## &nbsp; ✦ &nbsp; structure

```
VamPortfolio/
├── index.html                 # Vite entry + meta tags + font import
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx               # React root
    ├── App.jsx                # Section logic, navigation, loading animation
    ├── style.css
    ├── assets/
    │   ├── moon.jpeg
    │   ├── jkoo.jpeg
    │   └── wine.jpeg
    ├── components/
    │   ├── SvgSprite.jsx      # All icon symbol definitions
    │   └── Footer.jsx         # Nav buttons + social icons
    └── hooks/
        └── useClientDetect.js # Mobile/OS detection + viewport height fixes
```

---

## &nbsp; ✦ &nbsp; sections

```
#          →  home
#about     →  about
#interest  →  interest
#aus       →  aus
```

---

## &nbsp; ✦ &nbsp; notes

- Important: Client-specific information has been removed and replaced with mock data to comply with confidentiality requirements.

---

<div align="center">

_freelance work · 2024 · published with owner's permission_

</div>
