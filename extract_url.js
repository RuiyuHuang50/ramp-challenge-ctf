// Script to extract hidden URL from Ramp Challenge
// Run this in browser console on: https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge

function extractHiddenURL() {
    console.log('Starting URL extraction...');
    
    // Find all sections with data-id attribute that contains "92"
    const sections = document.querySelectorAll('section[data-id*="92"]');
    console.log(`Found ${sections.length} sections with data-id containing "92"`);
    
    let urlCharacters = [];
    let debugInfo = [];
    
    // Process each section in order they appear in the DOM
    sections.forEach((section, index) => {
        const dataId = section.getAttribute('data-id');
        console.log(`Section ${index + 1}: data-id="${dataId}"`);
        
        // Find article with data-class containing "45"
        const article = section.querySelector('article[data-class*="45"]');
        if (article) {
            const dataClass = article.getAttribute('data-class');
            console.log(`  Found article: data-class="${dataClass}"`);
            
            // Find div with data-tag containing "78"
            const div = article.querySelector('div[data-tag*="78"]');
            if (div) {
                const dataTag = div.getAttribute('data-tag');
                console.log(`    Found div: data-tag="${dataTag}"`);
                
                // Find b tag with class="ref" and value attribute
                const b = div.querySelector('b.ref[value]');
                if (b) {
                    const character = b.getAttribute('value');
                    console.log(`      Found character: "${character}"`);
                    
                    urlCharacters.push(character);
                    debugInfo.push({
                        index: index + 1,
                        dataId: dataId,
                        dataClass: dataClass,
                        dataTag: dataTag,
                        character: character
                    });
                } else {
                    console.log(`      No b.ref[value] found`);
                }
            } else {
                console.log(`    No div with data-tag*="78" found`);
            }
        } else {
            console.log(`  No article with data-class*="45" found`);
        }
    });
    
    const hiddenURL = urlCharacters.join('');
    
    console.log('\n=== EXTRACTION COMPLETE ===');
    console.log('Debug Info:', debugInfo);
    console.log('Characters found:', urlCharacters);
    console.log('Hidden URL:', hiddenURL);
    console.log('URL Length:', hiddenURL.length);
    
    // Test if it looks like a valid URL
    if (hiddenURL.startsWith('http')) {
        console.log('✅ URL looks valid (starts with http)');
    } else {
        console.log('⚠️  URL might be incomplete or invalid');
    }
    
    return hiddenURL;
}

// Alternative approach if the first one doesn't work
function extractHiddenURLAlternative() {
    console.log('Starting alternative extraction...');
    
    // Get all elements and scan manually
    const allElements = document.querySelectorAll('*');
    let urlCharacters = [];
    
    // Look for the pattern in document order
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        
        // Check if this is a section with the right pattern
        if (element.tagName === 'SECTION' && 
            element.hasAttribute('data-id') && 
            element.getAttribute('data-id').includes('92')) {
            
            // Look ahead for the complete pattern
            const pattern = findCompletePattern(element);
            if (pattern) {
                urlCharacters.push(pattern.character);
                console.log(`Found character: "${pattern.character}" from pattern starting at section`);
            }
        }
    }
    
    function findCompletePattern(section) {
        try {
            const article = section.querySelector('article[data-class*="45"]');
            if (!article) return null;
            
            const div = article.querySelector('div[data-tag*="78"]');
            if (!div) return null;
            
            const b = div.querySelector('b.ref[value]');
            if (!b) return null;
            
            return {
                character: b.getAttribute('value'),
                section: section.getAttribute('data-id'),
                article: article.getAttribute('data-class'),
                div: div.getAttribute('data-tag')
            };
        } catch (e) {
            return null;
        }
    }
    
    const hiddenURL = urlCharacters.join('');
    console.log('Alternative extraction result:', hiddenURL);
    return hiddenURL;
}

// Run both methods
console.log('=== METHOD 1 ===');
const url1 = extractHiddenURL();

console.log('\n=== METHOD 2 ===');
const url2 = extractHiddenURLAlternative();

// Final result
const finalURL = url1 || url2;
console.log('\n=== FINAL RESULT ===');
console.log('Extracted URL:', finalURL);

// Copy to clipboard if available
if (navigator.clipboard) {
    navigator.clipboard.writeText(finalURL).then(() => {
        console.log('✅ URL copied to clipboard!');
    });
}

// Store the URL for further use
window.extractedURL = finalURL;

// Display final result prominently
console.log('\n🎯 COPY THIS URL:');
console.log('==================');
console.log(finalURL);
console.log('==================');

// Return value (but don't use return statement at global scope)
finalURL;
