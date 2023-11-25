import { createContext, useState } from 'react';

const ColorContext = createContext([]);

export const ColorProvider = ({children}) => {
    const [generatedColors, setGeneratedColors] = useState(["b0adf7", "8b81d6", "7b5dba", "5b3d91", "4b278c",])
    const [myColors, setMyColors] = useState(["N","N","N","N","N"])
    const [selectBlockColors, setSelectBlockColors] = useState(["N","N","N","N","N"])
    
    function rgbToHex(array) {
        const toHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        
        const hexArray = []
        for (let i = 0; i < array.length; i++) {
            let hexValue = toHex(array[i][0]) + toHex(array[i][1]) + toHex(array[i][2])
            hexArray.push(hexValue)
        }
        return hexArray
      }  
      function hexToRgb(hex) {
        // Remove the hash 
        hex = hex.replace(/^#/, '');

        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
    
        return [ r, g, b ];
    }            

    return (
        <ColorContext.Provider value={{generatedColors, setGeneratedColors, myColors, setMyColors, rgbToHex, hexToRgb, selectBlockColors, setSelectBlockColors}}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContext