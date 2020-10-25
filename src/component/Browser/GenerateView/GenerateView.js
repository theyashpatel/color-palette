import React, {useState} from 'react'
import { Image } from 'semantic-ui-react'
import LoadingLogo from '../../../images/astronaut.png'
import useKeypress from '../../Helper/UseKeyPress'
import FunctionHeader from '../FunctionHeader'
import ColorView from './ColorView/ColorView'
import './GenerateView.css'

export default function GenerateView() {

    const [refresh, doRefresh] = useState(0)

    useKeypress(' ', () => {
        reloadColor()
      })
    
      function reloadColor() {
        doRefresh(pstate => {
          return pstate + 1
        })
      }

    return (
        <div className="browser sub body" style={{ height: "95%" }}>
            <div className="browser function header" style={{ height: '5%' }}>
                <FunctionHeader reloadColor={reloadColor} />
            </div>
            <div
                className="colorGroupView">
                <ColorView refresh={refresh} viewWidth={window.innerWidth / 3}/>
                <ColorView refresh={refresh} viewWidth={window.innerWidth / 3}/>
                <ColorView refresh={refresh} viewWidth={window.innerWidth / 3}/>
            </div>
        </div>
    )
}
