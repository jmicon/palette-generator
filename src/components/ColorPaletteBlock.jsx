import React, {useContext} from 'react'
import ColorContext from '../context/ColorContext'

const ColorPaletteBlock = ({genBlockIndex}) => {
    const {generatedColors, setGeneratedColors, myColors, setMyColors} = useContext(ColorContext)

  return (
        <div className='pb-4'>
            <div className='flex justify-center py-2'>
              <div className='h-16 w-16 border hover:scale-95 duration-75' style={{backgroundColor: `#${generatedColors[genBlockIndex]}`}}></div>
            </div>
            <p className='min-w-[6rem]'>{"#" + generatedColors[genBlockIndex]}</p>
        </div>

  )
}

export default ColorPaletteBlock