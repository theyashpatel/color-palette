import React, { useState } from 'react'
import TopHeader from './TopHeader'
import '../../css/BrowserTopMenu.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GenerateView from './GenerateView'
import ExploreView from './ExploreView'

export default function BrowserViewLayout() {

    return (
        <BrowserRouter>
            <div className="browser view layout" style={{ height: '100vh' }}>
                <div className="browser top header" style={{ height: '5%' }}>
                    <TopHeader />
                </div>
                <Switch>
                    <Route exact path="/" component={GenerateView} />
                    <Route path="/generate" component={GenerateView} />
                    <Route path="/explore" component={ExploreView} />
                </Switch>
            </div>
        </BrowserRouter>
    )

}
