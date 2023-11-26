import React, {useContext} from 'react'
import ColorContext from '../context/ColorContext'
import { useState } from 'react'
import SinglePallete from './SinglePallete'

const Palletes = () => {
    const [hovering, setHovering] = useState(false)

    const {generatedColors} = useContext(ColorContext)

    return (
        <>
            <div className='h-96 max-w-[400px] m-auto border'>
                <SinglePallete index={0} height={"37.5%"}/>
                <SinglePallete index={1} height={"25%"}/>
                <SinglePallete index={2} height={"12.5%"}/>
                <SinglePallete index={3} height={"12.5%"}/>
                <SinglePallete index={4} height={"12.5%"}/>
            </div>

        </>
    )
}

export default Palletes