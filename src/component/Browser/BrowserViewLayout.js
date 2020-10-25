import React from 'react'
import TopHeader from './TopHeader'
import '../../css/BrowserTopMenu.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import GenerateView from './GenerateView/GenerateView'
import ExploreView from './ExploreView'

export default function BrowserViewLayout() {

    return (
        <BrowserRouter>
            <div className="browser view layout" style={{ height: '100vh' }}>
                <div className="browser top header" style={{ height: '7%' }}>
                    <TopHeader />
                </div>
                <Switch>
                    <Route exact path="/" component={GenerateView} />
                    <Route path="/generate" component={GenerateView} />
                    <Route path="/explore" component={ExploreView} />
                    <Route path="/*">
                        <Redirect to="/generate" />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )

}
