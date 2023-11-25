import React, {useContext} from 'react'
import ColorContext from '../context/ColorContext'

const ColorPaletteBlock = ({genBlockIndex}) => {
    const {generatedColors, setGeneratedColors, myColors, setMyColors} = useContext(ColorContext)

  return (
        <div className='pb-4'>
            <div className='flex justify-center py-2'>
              <div className='h-16 w-16' style={{backgroundColor: `#${generatedColors[genBlockIndex]}`}}></div>
            </div>
            {/* Color variables that create the palette used here. Sort the palette, then this will be easy */}
            <p className='min-w-[6rem]'>{"#" + generatedColors[genBlockIndex]}</p>
            {/* <input type="text" name="" id="" className='min-w-[6rem] text-center' value={"#" + generatedColors[genBlockIndex]} /> */}
        </div>

  )
}

export default ColorPaletteBlock