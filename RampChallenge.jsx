import React, { useState, useEffect } from 'react';

const RampChallenge = () => {
  const [extractedURL, setExtractedURL] = useState('');
  const [flagData, setFlagData] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (flagData && currentIndex < flagData.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + flagData[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust speed as needed (100ms per character)

      return () => clearTimeout(timer);
    }
  }, [flagData, currentIndex]);

  const fetchFlag = async (url) => {
    setIsLoading(true);
    setError('');
    setDisplayedText('');
    setCurrentIndex(0);
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const text = await response.text();
      setFlagData(text);
    } catch (err) {
      setError(`Failed to fetch flag: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (extractedURL.trim()) {
      fetchFlag(extractedURL.trim());
    }
  };

  const handleURLChange = (e) => {
    setExtractedURL(e.target.value);
  };

  // Auto-populate URL if it was extracted and stored in window object
  useEffect(() => {
    if (window.extractedURL) {
      setExtractedURL(window.extractedURL);
    }
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      color: '#00ff00',
      fontFamily: 'Monaco, "Courier New", monospace',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        backgroundColor: '#000',
        border: '2px solid #00ff00',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5rem',
          textShadow: '0 0 10px #00ff00'
        }}>
          RAMP CHALLENGE CTF
        </h1>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '15px', color: '#ffff00' }}>
            Step 1: Extract URL from DOM
          </h2>
          <p style={{ marginBottom: '15px', color: '#ccc' }}>
            Use the browser console script to extract the hidden URL, then paste it below:
          </p>
          
          <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
              type="text"
              value={extractedURL}
              onChange={handleURLChange}
              placeholder="Paste extracted URL here..."
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#333',
                border: '1px solid #00ff00',
                color: '#00ff00',
                fontFamily: 'Monaco, "Courier New", monospace',
                fontSize: '14px',
                marginBottom: '10px'
              }}
            />
            <button
              type="submit"
              disabled={!extractedURL.trim() || isLoading}
              style={{
                padding: '10px 20px',
                backgroundColor: '#00ff00',
                color: '#000',
                border: 'none',
                borderRadius: '5px',
                fontFamily: 'Monaco, "Courier New", monospace',
                fontWeight: 'bold',
                cursor: 'pointer',
                opacity: (!extractedURL.trim() || isLoading) ? 0.5 : 1
              }}
            >
              {isLoading ? 'FETCHING FLAG...' : 'CAPTURE FLAG'}
            </button>
          </form>
        </div>

        {error && (
          <div style={{
            padding: '15px',
            backgroundColor: '#660000',
            border: '1px solid #ff0000',
            borderRadius: '5px',
            marginBottom: '20px',
            color: '#ff6666'
          }}>
            <strong>ERROR:</strong> {error}
          </div>
        )}

        {flagData && (
          <div style={{ marginTop: '30px' }}>
            <h2 style={{ marginBottom: '15px', color: '#ffff00' }}>
              Step 2: Flag Captured!
            </h2>
            <div style={{
              padding: '20px',
              backgroundColor: '#003300',
              border: '2px solid #00ff00',
              borderRadius: '5px',
              minHeight: '100px',
              fontSize: '18px',
              lineHeight: '1.5',
              wordBreak: 'break-all'
            }}>
              {displayedText}
              {currentIndex < flagData.length && (
                <span style={{ 
                  animation: 'blink 1s infinite',
                  backgroundColor: '#00ff00',
                  color: '#000',
                  padding: '0 2px'
                }}>
                  ▌
                </span>
              )}
            </div>
            
            {currentIndex >= flagData.length && (
              <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#004400',
                border: '1px solid #00ff00',
                borderRadius: '5px',
                textAlign: 'center'
              }}>
                <strong style={{ color: '#ffff00' }}>FLAG CAPTURE COMPLETE! 🎉</strong>
                <br />
                <small style={{ color: '#ccc' }}>
                  Length: {flagData.length} characters
                </small>
              </div>
            )}
          </div>
        )}

        <div style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#444',
          borderRadius: '5px',
          fontSize: '12px',
          color: '#ccc'
        }}>
          <strong>Instructions:</strong>
          <ol style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li>Open the challenge URL in a new tab</li>
            <li>Use the browser console script to extract the hidden URL</li>
            <li>Paste the extracted URL in the input field above</li>
            <li>Click "CAPTURE FLAG" to fetch and display the flag with typewriter effect</li>
          </ol>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default RampChallenge;
