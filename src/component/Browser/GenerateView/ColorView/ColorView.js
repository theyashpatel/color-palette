import React, { useState, useEffect } from 'react'
import VRHeader from 'component/Header/VRHeader'
import { calculateLuminance, getRandomColor } from '../../../../data/HelperFunctions'
import nameOfColor from '../../../../data/NameTheColor'
import '../GenerateView.css'
import lock from 'images/app/lock.png'
import unlock from 'images/app/unlock.png'
import darklock from 'images/app/darklock.png'
import darkunlock from 'images/app/darkunlock.png'

export default function ColorView({ payload }) {

    const [fixvisibility, setfixvisibility] = useState("hidden")
    const [isFixed, setIsFixed] = useState(false)
    const [divcolor, setDivColor] = useState("lightseagreen")
    const [isDark, setIsDark] = useState(true)

    // defines luminance threshold
    const lt = 55

    // calculate color luminocity
    // based on the luminocity use black of white color
  
    useEffect(() => {

        if (!isFixed) {
            setDivColor(() =>  {
              const hexCode =  getRandomColor()
              setIsDark(() => calculateLuminance(hexCode) > lt)
              return hexCode
            })

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
        visibility: fixvisibility,
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
                src={isDark ? (isFixed ? darklock : darkunlock) : (isFixed ? lock : unlock)}
                onClick={handleClick}
                alt="lock"
            />
            <VRHeader dark={isDark} label={divcolor.slice(1,)} />
            <VRHeader dark={isDark} subheader label={nameOfColor(divcolor)} />
        </div>
    )
}