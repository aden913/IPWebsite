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
          className='fontButtonCircle'
          id='fontCircleA'
            style={{
              display: 'inline-block',
              width: '.5em',
              height: '.5em',
              borderRadius: '50%',
              backgroundColor: '#02c8f0',
              
            }}
          ></span>
        </ToggleButton>
        <ToggleButton value="mediumFont" aria-label="Medium Font">
          <span
          className='fontButtonCircle'
          id='fontCircleB'
            style={{
              display: 'inline-block',
              width: '.70em',
              height: '.70em',
              borderRadius: '50%',
              backgroundColor: '#02c8f0',
            }}
          ></span>
        </ToggleButton>
        <ToggleButton value="largeFont" aria-label="Large Font">
          <span
          className='fontButtonCircle'
id='fontCircleC'
            style={{
              display: 'inline-block',
              width: '.9em',
              height: '.9em',
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
