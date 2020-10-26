import React, {useState} from 'react'
import useKeypress from '../../Helper/UseKeyPress'
import FunctionHeader from '../FunctionHeader'
import ColorView from './ColorView/ColorView'
import './GenerateView.css'

export default function GenerateView() {
    const [refresh, doRefresh] = useState(0)
    const [noOfColorViews, setNoOfColorViews] =useState(5)

    useKeypress(' ', () => {
        reloadColor()
      })

      function generateColorView() {
            var views = []
            for (var i = 0; i < noOfColorViews; i++) {
                views.push(<ColorView key={i} refresh={refresh} viewWidth={window.innerWidth / noOfColorViews}/>)
            }
            return views
      }
          
      function reloadColor() {
        doRefresh(pstate => {
          return pstate + 1
        })
      }

      function addColorView() {
          setNoOfColorViews(pstate => pstate + 1)
      }

      function minusColorView() {
        setNoOfColorViews(pstate => pstate - 1)
    }

      const functions = {
          minusColorView: minusColorView,
          addColorView: addColorView,
          reloadColor: reloadColor
      }

    return (
        <div className="browser sub body" style={{ height: "93%" }}>
            <div className="browser function header" style={{ height: '7%' }}>
                <FunctionHeader functions={functions} />
            </div>
            <div
                className="colorGroupView">
                {generateColorView()}
            </div>
        </div>
    )
}
