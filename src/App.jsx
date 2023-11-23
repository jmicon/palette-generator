import { useState } from 'react'
import './App.css'
import Palletes from './components/Palletes'
import { useEffect } from 'react'

function App() {
  const [generatedColors, setGeneratedColors] = useState([])
  const [myColors, setMyColors] = useState(["N","N","N","N","N"])

  console.log(generatedColors[0], "yes");

  const generatePalette = async () => {
    const response = await fetch(`http://colormind.io/api/`, {
      method: "POST",
      body: JSON.stringify({
        input: myColors,
        model: "default"
      })
    })
    const palette = await response.json()
    console.log(palette);
    setGeneratedColors(palette.result)
  }

  // Change this so it works in a component with index variables
  const myColorsArray = (color, index) => {
    const newArray = [...myColors]

    newArray[index] = color

    setMyColors(newArray)
  }

  const resetPalette = () => {
    setMyColors(["N","N","N","N","N"])
  }
  
  return (
    <>
    <section className='w-full m-auto flex justify-center bg-slate-400'>
      <div className='bg-green-400 w-2/3'>
        <div className={`w-5 h-5 bg-[${generatedColors[0]}]`} style={{backgroundColor: `${generatedColors[0]}`}}></div>
        <h1 className='text-5xl text-center'>Color Palette Generator</h1>
        <Palletes />
      </div>

    </section>
      <div className='text-center'>
        <h2>colors to include</h2>

{/* Blue color block section */}
        <div className='flex justify-around'>
          <div>
            <div className='h-9 w-9 bg-blue-500'></div>
            {/* Color variables that create the palette used here. Sort the palette, then this will be easy */}
            <p>#47934</p>
          </div>
          <div>
            <div className='h-9 w-9 bg-blue-500'></div>
            <p>#47934</p>
          </div>
          <div>
            <div className='h-9 w-9 bg-blue-500'></div>
            <p>#47934</p>
          </div>
          <div>
            <div className='h-9 w-9 bg-blue-500'></div>
            <p>#47934</p>
          </div>
          <div>
            <div className='h-9 w-9 bg-blue-500'></div>
            <p>#47934</p>
          </div>
        </div>
{/* Click on empty box to change color which adds it to the index 0-4 of the myColors state array */}
        <div className='mt-5'>
          <h2>Include colors</h2>
          <div className='flex justify-around'>
            <div>
            <input type="color" id="colorPicker" name="colorPicker" value={myColors[0] === "N" ? "#CCCCCC" : myColors[0]} onChange={color => myColorsArray(color.target.value, 0)} 
              className='h-9 w-9 p-0 rounded' style={{backgroundColor: `${myColors[0]}`}} 
            />
            {/* <div className='h-9 w-9 p-0 rounded' style={{backgroundColor: `${myColors[0]}`}}></div> */}
              {/* Color variables that create the palette used here. Sort the palette, then this will be easy */}
              <p>{myColors[0] === "N" ? "#" : myColors[0]}</p>
              {/* <input type="text" value={myColors[0] === "N" ? "#" : myColors[0]} onChange={color => myColorsArray(color.target.value, 0)}/> */}
            </div>
            <div>
              <div className='h-9 w-9 border border-black'></div>
              <p>EMPTY</p>
            </div>
            <div>
              <div className='h-9 w-9 border border-black'></div>
              <p>EMPTY</p>
            </div>
            <div>
              <div className='h-9 w-9 border border-black'></div>
              <p>EMPTY</p>
            </div>
            <div>
              <div className='h-9 w-9 border border-black'></div>
              <p>EMPTY</p>
            </div>
          </div>

        </div>
        <button className='bg-green-400 p-3 rounded mx-3' onClick={generatePalette}>Generate New Palette</button>
        <button className='bg-green-400 p-3 rounded mx-3' onClick={resetPalette}>reset includeed colors</button>

      </div>
    </>
  )
}

export default App
