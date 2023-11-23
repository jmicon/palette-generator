import React from 'react'

const ColorSelectBlock = () => {
  return (
    <div>
        <input type="color" id="colorPicker" name="colorPicker" value={myColors[0] === "N" ? "#CCCCCC" : myColors[0]} onChange={color => myColorsArray(color.target.value, 0)} 
            className='h-9 w-9 p-0 rounded' style={{backgroundColor: `${myColors[0]}`}} 
        />
        {/* <div className='h-9 w-9 p-0 rounded' style={{backgroundColor: `${myColors[0]}`}}></div> */}
            {/* Color variables that create the palette used here. Sort the palette, then this will be easy */}
            <p>{myColors[0] === "N" ? "#" : myColors[0]}</p>
            {/* <input type="text" value={myColors[0] === "N" ? "#" : myColors[0]} onChange={color => myColorsArray(color.target.value, 0)}/> */}
    </div>
  )
}

export default ColorSelectBlock