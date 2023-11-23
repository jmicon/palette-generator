import { createContext, useState } from 'react';

const ColorContext = createContext([]);

export const ColorProvider = ({children}) => {
    const [generatedColors, setGeneratedColors] = useState([])
    const [myColors, setMyColors] = useState(["N","N","N","N","N"])
    


    return (
        <ColorContext.Provider value={{generatedColors, setGeneratedColors, myColors, setMyColors}}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContext