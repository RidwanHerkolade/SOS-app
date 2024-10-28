import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function HistorySlide() {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
      sx={{ 
        height: "100%",  // Adjust height to fit the vertical slider
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}
    >
      <Slider
        orientation="vertical" // Make the slider vertical
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaLabel={() => 'Temperature range'}
        getAriaValueText={valuetext}
        style={{ color: "#F5F5F5" }}
      />
    </Box>
  );
}
