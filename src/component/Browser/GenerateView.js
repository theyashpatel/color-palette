import React from 'react'
import { Image } from 'semantic-ui-react'
import LoadingLogo from '../../images/astronaut.png'
import FunctionHeader from './FunctionHeader'

export default function GenerateView() {
    return (
        <div className= "browser sub body" style={{height: "95%"}}>
            <div className="browser function header" style={{ height: '5%' }}>
                <FunctionHeader />
            </div>
            <div className="browser main body" style={{ height: '95%' }}>
                <Image src={LoadingLogo} size="medium" />
                <h1>GOO GOO GAA GAA</h1>
            </div>
        </div>
    )
}
