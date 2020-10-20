import React, { Component } from 'react';
import { BrowserView, isBrowser, isMobile, MobileView } from 'react-device-detect';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { Button, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import CustomHeader from './component/CustomHeader';
import CustomThemeSelect from './component/CustomThemeSelect';
import getRandomColor from './data/HelperFunctions';
import AppLogo from './images/rang.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      theme: "blue",
      divisions: 5
    }
    this.handleChange = this.handleChange.bind(this)
  }

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
    const message = isMobile? "Tap": "Cick"
    toast( message + " on color to copy HEX code.", {
      position: "bottom-center",
      transition: Flip,
      type:"info",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  handleCopy(event) {
    window.navigator.clipboard.writeText(event.target.title)
    toast(event.target.title + " is copied.", {
      position: "bottom-center",
      transition: Flip,
      type:"info",
      autoClose: 1500,
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
      items.push(<div onClick={this.handleCopy} key={i} title={randomColor} style={{ backgroundColor: randomColor, position: "absolute", bottom: 0, top: colorSize, width: window.innerWidth / noOfDivisions, marginLeft: (window.innerWidth / noOfDivisions) * i }}></div>)
    }
    return (
      <div>
        {items}
      </div>
    )
  }

  handleTheme = (event, result) => {
    this.setState({
      theme: result.value
    })
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
    const colorTheme = this.state.theme
    // this is a change
    return (
      <div>
        <ToastContainer />
        <BrowserView>
          <CustomHeader themeColor={colorTheme} />
          <Segment.Group horizontal>
            <CustomThemeSelect theme={colorTheme} handleTheme={this.handleTheme} />
            <Segment textAlign="center">
              <Button.Group>
                <Button basic color={colorTheme} name="add" onClick={this.handleChange} icon="add circle" />
                <Button basic color={colorTheme} name="sub" onClick={this.handleChange} icon="minus circle" />
              </Button.Group>
            </Segment>
            <Segment textAlign="center">
              <Button basic color={colorTheme} name="gen" onClick={this.handleChange} icon="refresh" />
            </Segment>
          </Segment.Group>
          {this.drawDivisions(this.state.divisions)}
        </BrowserView>

        {/* Mobile Stuff Begins Here */}

        <MobileView>
          <Segment.Group vertical="true">
          <Segment>
            <Grid columns={2} relaxed='very'>
              <Grid.Column verticalAlign="middle">
                {/* <Header as="h1" textAlign="center" color={colorTheme}>Color Palette</Header> */}
                <Image verticalAlign="middle" src={AppLogo} size="small" />
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <Header as="h5" textAlign="center" color={colorTheme}>Yash Patel
                  </Header>
              </Grid.Column>
            </Grid>
            <Divider vertical>by</Divider>
          </Segment>
            <Segment.Group horizontal>
              <Segment textAlign="center">
                <Button.Group>
                  <Button basic color={colorTheme} name="add" onClick={this.handleChange} icon="add circle" />
                  <Button basic color={colorTheme} name="sub" onClick={this.handleChange} icon="minus circle" />
                </Button.Group>
              </Segment>
              <Segment textAlign="center">
                <Button basic color={colorTheme} name="gen" onClick={this.handleChange} icon="refresh" />
              </Segment>
            </Segment.Group>
            <CustomThemeSelect theme={colorTheme} handleTheme={this.handleTheme} />
          </Segment.Group>
          {this.drawDivisions(this.state.divisions)}
        </MobileView>
      </div>
    )
  }
}

export default App;
