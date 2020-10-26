import React, { useState, useEffect } from 'react'
import getRandomColor from '../../../../data/HelperFunctions'
import '../GenerateView.css'
import lock from './lock.png'
import unlock from './unlock.png'

export default function ColorView({ payload }) {

    const [fixvisibility, setfixvisibility] = useState("hidden")
    const [isFixed, setIsFixed] = useState(false)
    const [divcolor, setDivColor] = useState("lightseagreen")
  
    useEffect(() => {

        if (!isFixed) {
            setDivColor(() =>  getRandomColor())
          }

    }, [payload.refresh]) // eslint-disable-line react-hooks/exhaustive-deps
  
    function handleMouseEnter() {
      setfixvisibility(() => setfixvisibility(null))
    }
  
    function handleMouseLeave() {
      if (!isFixed) {
        setfixvisibility(() => setfixvisibility("hidden"))
      }
    }
  
    function handleClick() {
      setIsFixed(pstate => {
        return !pstate
      })
    }
    const colorViewStyle = {
        width: payload.viewWidth,
        backgroundColor: divcolor,
        margin: payload.margin
    }

    const lockImgStyle = {
        visibility: fixvisibility
      }

    return (
        <div
            className="colorViewDiv"
            style={colorViewStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                className="lockImg"
                style={lockImgStyle}
                src={isFixed ? lock : unlock}
                onClick={handleClick}
                alt="lock"
            />
        </div>
    )
}
