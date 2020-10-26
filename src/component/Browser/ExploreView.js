import React from 'react'
import { Image } from 'semantic-ui-react'
import LoadingLogoTwo from '../../images/astronaut2.png'

export default function ExploreView() {
    return (
        <div className="browser main body" style={{ height: '90%' }}>
                    <Image src={LoadingLogoTwo} size="medium" />
                    <h1>EXPLORE. COMING SOON!</h1>
                </div>
    )
}
