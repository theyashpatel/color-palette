import React, { useState, useEffect } from 'react'
import getRandomColor from '../../../../data/HelperFunctions'
import '../GenerateView.css'
import lock from './lock.png'
import unlock from './unlock.png'

export default function ColorView(props) {

    const [fixvisibility, setfixvisibility] = useState("hidden")
    const [isFixed, setIsFixed] = useState(false)
    const [divcolor, setDivColor] = useState("lightseagreen")
  
    useEffect(() => {
      setColor()
    }, [props.refresh])
  
    function handleMouseEnter() {
      setfixvisibility(pstate => setfixvisibility(null))
    }
  
    function handleMouseLeave() {
      if (!isFixed) {
        setfixvisibility(pstate => setfixvisibility("hidden"))
      }
    }
  
    function handleClick() {
      setIsFixed(pstate => {
        return !pstate
      })
    }
  
    function setColor() {
      const colors = ["lightseagreen", "lightlategray", "lightsalmon", "lightblue", "lightcoral", "lightpink", "lightyellow"]
      if (!isFixed) {
        setDivColor(pstate =>  getRandomColor())
      }
    }

    const colorViewStyle = {
        width: props.viewWidth,
        backgroundColor: divcolor
    }

    const imageStyle = {

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
