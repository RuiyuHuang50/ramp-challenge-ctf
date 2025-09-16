# Ramp Challenge CTF Solution

## 🎯 Challenge Overview
This repository contains my solution to the Ramp Challenge CTF (Capture The Flag) exercise.

## 🚀 Live Demo
**[View the Live Solution](https://ruiyuhuang50.github.io/ramp-challenge-ctf/ramp-ctf-solution.html)**

## 📋 Solution Summary
- **Flag Captured**: `cheerly`
- **Hidden URL**: `https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636865`
- **Method**: DOM pattern extraction + typewriter display effect

## 🔍 Technical Approach

### Step 1: DOM Pattern Analysis
Analyzed the challenge page HTML structure to identify the pattern:
```
section[data-id*="92"] > article[data-class*="45"] > div[data-tag*="78"] > b.ref[value]
```

### Step 2: JavaScript Extraction
Created a browser console script (`extract_url.js`) to:
- Find all matching DOM elements
- Extract `value` attributes from `b.ref` elements
- Concatenate characters in document order to form the hidden URL

### Step 3: Flag Retrieval & Display
Built a web interface (`ramp-ctf-solution.html`) that:
- Fetches the flag from the extracted URL
- Displays the result with a typewriter animation effect
- Provides a professional CTF-themed user interface

## 📁 Files in this Repository

- **`ramp-ctf-solution.html`** - Complete solution with live demo
- **`extract_url.js`** - Browser console script for URL extraction
- **`simple_extract.js`** - Simplified extraction script (IIFE wrapped)
- **`RampChallenge.jsx`** - React component version
- **`RampChallenge_CodeSandbox.jsx`** - CodeSandbox-optimized React version
- **`ctf_simple.html`** - Simplified HTML version

## 🎨 Features

✅ **Hacker Aesthetic** - Terminal-style green-on-black theme  
✅ **Typewriter Effect** - Character-by-character flag reveal  
✅ **Error Handling** - Comprehensive network error management  
✅ **Responsive Design** - Works on desktop and mobile  
✅ **Documentation** - Complete technical notes included  

## 🔧 How to Use

### Option 1: View Live Demo
Simply visit the [live demo link](https://ruiyuhuang50.github.io/ramp-challenge-ctf/ramp-ctf-solution.html)

### Option 2: Run Locally
1. Clone this repository
2. Open `ramp-ctf-solution.html` in your browser
3. The URL is pre-filled - just click "CAPTURE FLAG"

### Option 3: Extract URL Manually
1. Visit the challenge page
2. Open browser console (F12)
3. Copy-paste `extract_url.js` or `simple_extract.js`
4. Use the extracted URL in the solution interface

## 🏆 Final Result
**Submission Format**: `cheerly - https://ruiyuhuang50.github.io/ramp-challenge-ctf/ramp-ctf-solution.html`

---

*Built with vanilla JavaScript, HTML5, and CSS3. No external dependencies required.*
