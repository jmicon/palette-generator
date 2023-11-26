import { useState, useContext } from 'react'
import Palletes from './components/Palletes'
import { useEffect } from 'react'
import ColorContext from './context/ColorContext'
import ColorSelectBlock from './components/ColorSelectBlock'
import ColorPaletteBlock from './components/ColorPaletteBlock'

function App() {
  const {generatedColors, setGeneratedColors, myColors, setMyColors, rgbToHex, setSelectBlockColors} = useContext(ColorContext)

  const generatePalette = async () => {
    const response = await fetch(`http://colormind.io/api/`, {
      method: "POST",
      body: JSON.stringify({
        input: myColors,
        model: "default"
      })
    })
    const palette = await response.json()
    console.log(palette.result, "pp");

    const hexArray = rgbToHex(palette.result)
    setGeneratedColors(hexArray)
  }

  const resetPalette = () => {
    setMyColors(["N","N","N","N","N"])
    setSelectBlockColors(["N","N","N","N","N"])
  }
  
  return (
    <>
    <section className='m-auto max-w-[1279px] pt-3 md:pt-0'>
      <div className='flex justify-center'>
        <div className='w-full'>
          {/* <div className={`w-5 h-5 bg-[${!!generatedColors[0] && generatedColors[0]}]`} style={{backgroundColor: `${generatedColors[0]}`}}></div> */}
          {/* <h1 className='text-5xl text-center py-6'>Generate a Color Palette</h1> */}
          <Palletes />
        </div>
      </div>

      <div className='text-center m-auto'>

{/* Blue color block section */}
        <div className='flex justify-center flex-wrap gap-3 pt-6'>
          <ColorPaletteBlock genBlockIndex={0}/>
          <ColorPaletteBlock genBlockIndex={1}/>
          <ColorPaletteBlock genBlockIndex={2}/>
          <ColorPaletteBlock genBlockIndex={3}/>
          <ColorPaletteBlock genBlockIndex={4}/>
        </div>
{/* Click on empty box to change color which adds it to the index 0-4 of the myColors state array */}
        <div>
          <h2 className='text-2xl max-w-xs m-auto'>Influence The Palette</h2>
          <div className='flex justify-center flex-wrap pt-4 gap-3'>
            <ColorSelectBlock blockIndex={0} />
            <ColorSelectBlock blockIndex={1} />
            <ColorSelectBlock blockIndex={2} />
            <ColorSelectBlock blockIndex={3} />
            <ColorSelectBlock blockIndex={4} />
          </div>
        </div>

        <button className='border border-gray-400 hover:bg-gray-200 duration-100 p-3 rounded mx-3 my-3' onClick={generatePalette}>Generate New Palette</button>
        <button className='bg-gray-400 hover:bg-gray-300 duration-100 p-3 rounded mx-3 my-3' onClick={resetPalette}>Reset</button>

      </div>
      <div className='py-4'></div>
    </section>

    </>
  )
}

export default App
