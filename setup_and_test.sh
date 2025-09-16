#!/bin/bash

# Ramp Challenge CTF - Complete Solution Setup and Test

echo "🚀 Setting up Ramp Challenge CTF Solution..."
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the Ramp directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing React dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎯 RAMP CHALLENGE CTF - STEP BY STEP SOLUTION"
echo "=============================================="
echo ""
echo "STEP 1: Extract Hidden URL"
echo "------------------------"
echo "1. Open this URL in your browser:"
echo "   https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"
echo ""
echo "2. Open Browser Developer Tools (F12)"
echo ""
echo "3. Go to Console tab"
echo ""
echo "4. Copy and paste the content of 'extract_url.js' into the console"
echo ""
echo "5. Press Enter to run the script"
echo ""
echo "6. The script will extract the hidden URL and copy it to clipboard"
echo ""
echo "STEP 2: Run React Application"
echo "----------------------------"
echo "7. Start the React development server:"
echo "   npm start"
echo ""
echo "8. The app will open in your browser automatically"
echo ""
echo "9. Paste the extracted URL into the input field"
echo ""
echo "10. Click 'CAPTURE FLAG' to see the typewriter effect"
echo ""
echo "STEP 3: Enjoy the Results!"
echo "------------------------"
echo "11. Watch as the flag is displayed character by character"
echo ""
echo "12. The complete flag will be shown once the animation finishes"
echo ""
echo "📝 Files included in this solution:"
echo "  - extract_url.js      (Browser console script)"
echo "  - RampChallenge.jsx   (React component with typewriter effect)"
echo "  - App.js             (Main React application)"
echo "  - package.json       (Dependencies and scripts)"
echo "  - README.md          (Complete documentation)"
echo ""
echo "🎉 Ready to start! Run 'npm start' to begin the challenge!"
