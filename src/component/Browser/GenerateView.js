import React from 'react'
import { Image } from 'semantic-ui-react'
import FuctionHeader from './FuctionHeader'
import LoadingLogo from '../../images/astronaut.png'

export default function GenerateView() {
    return (
        <div className= "browser sub body" style={{height: "95%"}}>
            <div className="browser function header" style={{ height: '5%' }}>
                <FuctionHeader />
            </div>
            <div className="browser main body" style={{ height: '95%' }}>
                <Image src={LoadingLogo} size="medium" />
                <h1>GOO GOO GAA GAA</h1>
            </div>
        </div>
    )
}
