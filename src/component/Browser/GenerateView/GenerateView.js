import React, {useEffect, useState} from 'react'
import useKeypress from '../../Helper/UseKeyPress'
import FunctionHeader from '../FunctionHeader'
import ColorView from './ColorView/ColorView'
import './GenerateView.css'

export default function GenerateView() {
    const [refresh, doRefresh] = useState(0)
    const [noOfColorViews, setNoOfColorViews] =useState(5)
    const [isIsolated, setIsIsolated] = useState(false)

    useKeypress(' ', () => {
        reloadColor()
      })

      useEffect(() => {
        var htmlElement = document.querySelector("html");
        htmlElement.style.overflow = "hidden"

        return () => {
            htmlElement.style.overflow = "visible"
        }
      },[])

      function generateColorView() {

        const payload = {
            margin: isIsolated ? "6px" : "",
            refresh: refresh,
            viewWidth: window.innerWidth / noOfColorViews
        }

        var views = []
        for (var i = 0; i < noOfColorViews; i++) {
            views.push(<ColorView key={i} payload={payload}/>)
        }
        return views
      }
          
      function reloadColor() {
        doRefresh(pstate => {
          return pstate + 1
        })
        document.activeElement.blur();
      }

      function addColorView() {
          setNoOfColorViews(pstate => {
              if (pstate < 10) {
                  return pstate + 1
              }
              return pstate
            })
          document.activeElement.blur();
      }

      function minusColorView() {
        setNoOfColorViews(pstate => {
            console.log(pstate)
            if (pstate > 2) {
                return pstate - 1
            }
            return pstate
        })
        document.activeElement.blur(); // removes focus from the button after clicking it so that shortcuts work
    }

      const functionHeaderPayload = {
          isIsolated: isIsolated,
          setIsIsolated: setIsIsolated,
          noOfColorViews: noOfColorViews,
          minusColorView: minusColorView,
          addColorView: addColorView,
          reloadColor: reloadColor
      }

    return (
        <div className="browser sub body" style={{ height: "93%" }}>
            <div className="browser function header" style={{ height: '7%' }}>
                <FunctionHeader payload={functionHeaderPayload} />
            </div>
            <div
                className="colorGroupView">
                {generateColorView()}
            </div>
        </div>
    )
}
