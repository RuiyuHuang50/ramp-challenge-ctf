// Simple URL extraction script for browser console
// Copy and paste this entire script into the browser console

(function() {
    console.log('🔍 Starting URL extraction...');
    
    // Find all sections with data-id containing "92"
    const sections = document.querySelectorAll('section[data-id*="92"]');
    console.log(`Found ${sections.length} sections with data-id containing "92"`);
    
    let urlCharacters = [];
    
    // Process each section in order
    sections.forEach((section, index) => {
        try {
            // Follow the pattern: section > article[data-class*="45"] > div[data-tag*="78"] > b.ref[value]
            const article = section.querySelector('article[data-class*="45"]');
            if (!article) return;
            
            const div = article.querySelector('div[data-tag*="78"]');
            if (!div) return;
            
            const b = div.querySelector('b.ref[value]');
            if (!b) return;
            
            const character = b.getAttribute('value');
            urlCharacters.push(character);
            
            console.log(`✅ Found character ${index + 1}: "${character}"`);
        } catch (e) {
            console.log(`❌ Error processing section ${index + 1}:`, e);
        }
    });
    
    const hiddenURL = urlCharacters.join('');
    
    console.log('\n🎯 EXTRACTION COMPLETE!');
    console.log('========================');
    console.log('Hidden URL:', hiddenURL);
    console.log('Length:', hiddenURL.length, 'characters');
    console.log('========================');
    
    // Copy to clipboard
    if (navigator.clipboard && hiddenURL) {
        navigator.clipboard.writeText(hiddenURL).then(() => {
            console.log('✅ URL copied to clipboard!');
        }).catch(() => {
            console.log('⚠️ Could not copy to clipboard, but URL is displayed above');
        });
    }
    
    // Store globally for React app
    window.extractedURL = hiddenURL;
    
    // Validate URL format
    if (hiddenURL.startsWith('http')) {
        console.log('✅ URL format looks valid');
    } else {
        console.log('⚠️ URL might be incomplete - check the pattern');
    }
    
    return hiddenURL;
})();
