import React from 'react'
import SinglePalette from './SinglePalette'


const Palettes = () => {

    return (
        <>
            <div className='h-96 max-w-[400px] m-auto border bg-slate-300 relative'>
                <SinglePalette index={0} height={"37.5%"}/>
                <SinglePalette index={1} height={"25%"}/>
                <SinglePalette index={2} height={"12.5%"}/>
                <SinglePalette index={3} height={"12.5%"}/>
                <SinglePalette index={4} height={"12.5%"}/>
            </div>

        </>
    )
}

export default Palettes