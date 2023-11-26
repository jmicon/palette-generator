import React, {useContext} from 'react'
import ColorContext from '../context/ColorContext'

const ColorSelectBlock = ({ blockIndex }) => {
    const {generatedColors, setGeneratedColors, myColors, setMyColors, hexToRgb, selectBlockColors, setSelectBlockColors} = useContext(ColorContext)

    const myColorsArray = (color, index) => {
        const newRgbArray = [...myColors]
        const newHexArray = [...selectBlockColors]
    
        const rgbColor = hexToRgb(color)
        newRgbArray[index] = rgbColor
        newHexArray[index] = color

        setMyColors(newRgbArray)
        setSelectBlockColors(newHexArray)
      }

  return (
    <div className='pb-4'>
        <div className='flex justify-center py-2'>
            <input type="color" id="colorPicker" name="colorPicker" value={selectBlockColors[blockIndex] === "N" ? "#CCCCCC" : selectBlockColors[blockIndex]} onChange={color => myColorsArray(color.target.value, blockIndex)} className='cursor-pointer'/>
        </div>
        <p className='min-w-[6rem]'>{selectBlockColors[blockIndex] === "N" ? "#000000" : selectBlockColors[blockIndex]}</p>
        {/* <input type="text" value={myColors[blockIndex] === "N" ? "#" : myColors[blockIndex]} onChange={color => myColorsArray(color.target.value, blockIndex)}/> */}
    </div>
)
}

export default ColorSelectBlock