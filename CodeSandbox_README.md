# Ramp Challenge CTF - CodeSandbox Setup

## Files to Upload to CodeSandbox

### 1. package.json
```json
{
  "name": "ramp-challenge-ctf",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### 2. public/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ramp Challenge CTF</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 3. src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### 4. src/App.js
```javascript
import React from 'react';
import RampChallenge from './RampChallenge';
import './App.css';

function App() {
  return (
    <div className="App">
      <RampChallenge />
    </div>
  );
}

export default App;
```

### 5. src/App.css
Copy the content from App.css in this directory

### 6. src/RampChallenge.jsx
Copy the content from RampChallenge.jsx in this directory

## Steps to Create CodeSandbox:

1. Go to https://codesandbox.io/
2. Click "Create Sandbox"
3. Choose "React" template
4. Replace the default files with the files above
5. Make sure it runs and displays the CTF interface
6. Save and get the shareable link

## Final Submission Format:

cheerly - https://codesandbox.io/s/your-sandbox-link

## Notes:
- The flag was extracted from: https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636865
- DOM pattern used: section[data-id*="92"] > article[data-class*="45"] > div[data-tag*="78"] > b.ref[value]
- Solution includes typewriter effect display as requested
