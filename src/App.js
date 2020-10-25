import React, { Component } from 'react';
import { BrowserView, isBrowser, MobileView } from 'react-device-detect';
import { Flip, toast } from 'react-toastify';
import { Header } from 'semantic-ui-react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import getRandomColor from './data/HelperFunctions';
import nameOfColor from './data/NameTheColor';
import AddOns from './component/AddOns';
import BrowserViewLayout from './component/Browser/BrowserViewLayout';

class App extends Component {
  constructor() {
    super()
    this.state = {
      divisions: 5
    }
    this.handleChange = this.handleChange.bind(this)
  }

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  handleCopy(event) {
    window.navigator.clipboard.writeText(event.target.id)
    toast(nameOfColor(event.target.id) + " (" + event.target.id + ") is copied.", {
      position: "bottom-center",
      transition: Flip,
      type: "info",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    })
  }

  drawDivisions(noOfDivisions) {
    const colorSize = isBrowser ? "30%" : "60%"
    const items = []
    for (var i = 0; i < noOfDivisions; i++) {
      var randomColor = getRandomColor()
      items.push(<div id={randomColor} data-tip={nameOfColor(randomColor)} onClick={this.handleCopy} key={i} style={{ backgroundColor: randomColor, position: "absolute", bottom: 0, top: colorSize, width: window.innerWidth / noOfDivisions, marginLeft: (window.innerWidth / noOfDivisions) * i }}></div>)
    }
    return (
      <div>
        {items}
      </div>
    )
  }

  handleChange(event, result) {
    const { name } = result
    var value
    if (name === "add") {
      value = this.state.divisions + 1
    }
    else if (name === "gen") {
      value = this.state.divisions
    }
    else {
      value = this.state.divisions - 1
    }
    if (value <= 0) {
      value = 1
    }
    this.setState({
      divisions: value
    })
  }

  render() {
    return (
      <div>
        <BrowserView>
        <AddOns />
        <BrowserViewLayout />
          {/* <CustomHeader themeColor={colorTheme} />
          <Segment.Group horizontal>
            <Segment textAlign="center">
              <Button.Group>
                <Button primary name="add" onClick={this.handleChange} icon="add circle" />
                <Button primary color={colorTheme} name="sub" onClick={this.handleChange} icon="minus circle" />
              </Button.Group>
            </Segment>
            <Segment textAlign="center">
              <Button primary name="gen" onClick={this.handleChange} icon="refresh" />
            </Segment>
          </Segment.Group>
          {this.drawDivisions(this.state.divisions)} */}
        </BrowserView>
        {/* Mobile Stuff Begins Here */}

        <MobileView>
            <Header style={{position: "absolute", top: "40%", textAlign: "center"}} as="h1">Working on the mobile version of the app. Until then please use the desktop version.</Header>
        </MobileView>
      </div>
    )
  }
}

export default App;
