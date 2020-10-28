import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Header, Image } from 'semantic-ui-react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AddOns from './component/AddOns';
import BrowserViewLayout from './component/Browser/BrowserViewLayout';
import workingImage from './images/astronaut.png'

class App extends Component {

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    return (
      <div>
        <BrowserView>
          <AddOns />
          <BrowserViewLayout />
        </BrowserView>

        {/* Mobile Stuff Begins Here */}

        <MobileView>
          <div className="mobile working info">
            <Header style={{ color: "black", textAlign: "center", letterSpacing: "5px", fontSize: "50px", fontFamily: '"Lucida Console", Courier, monospace' }} as="h1">VIBGYOR</Header>
            <Image src={workingImage} size="small" />
            <Header style={{ textAlign: "center" }} as="h5">MOBILE VERSION COMING SOON!</Header>
          </div>
        </MobileView>
      </div>
    )
  }
}

export default App;
