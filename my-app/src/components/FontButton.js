import React, { useState, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Cookies from 'js-cookie'; // Import the cookie library

function FontSizeSelector() {
    const [fontSize, setFontSize] = useState(() => {
      // Retrieve the saved font size from cookies or default to 'mediumFont'
      return Cookies.get('fontSize') || 'mediumFont';
    });
  
    const handleFontSizeChange = (event, newFontSize) => {
      if (newFontSize) {
        setFontSize(newFontSize);
        Cookies.set('fontSize', newFontSize, { expires: 365 }); // Save the font size in a cookie for 1 year
        document.body.setAttribute('data-font-size', newFontSize); // Reflect font size globally
      }
    };
  
    useEffect(() => {
      // Apply the saved font size on component mount
      document.body.setAttribute('data-font-size', fontSize);
    }, [fontSize]);

  return (
    <div>
      <ToggleButtonGroup
        value={fontSize}
        exclusive
        onChange={handleFontSizeChange}
        aria-label="font size"
        style={
            {
                background: '#172b5f',
            }
        }
      >
         <ToggleButton value="smallFont" aria-label="Small Font">
          <span
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#02c8f0',
              
            }}
          ></span>
        </ToggleButton>
        <ToggleButton value="mediumFont" aria-label="Medium Font">
          <span
            style={{
              display: 'inline-block',
              width: '13px',
              height: '13px',
              borderRadius: '50%',
              backgroundColor: '#02c8f0',
            }}
          ></span>
        </ToggleButton>
        <ToggleButton value="largeFont" aria-label="Large Font">
          <span
            style={{
              display: 'inline-block',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: '#02c8f0',
            }}
          ></span>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default FontSizeSelector;
