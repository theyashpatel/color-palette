import React, { Component } from 'react';
import { BrowserView, isBrowser, MobileView } from 'react-device-detect';
import { Button, Divider, Grid, Header, Segment } from 'semantic-ui-react';
import './App.css';
import CustomHeader from './component/CustomHeader';
import CustomThemeSelect from './component/CustomThemeSelect';
import getRandomColor from './data/HelperFunctions';

class App extends Component {
  constructor() {
    super()
    this.state = {
      theme: "grey",
      divisions: 2
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
    window.navigator.clipboard.writeText(event.target.title)
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
          <Segment.Group vertical>
          <Segment>
            <Grid columns={2} relaxed='very'>
              <Grid.Column verticalAlign="middle">
                <Header as="h1" textAlign="center" color={colorTheme}>Color Palette</Header>
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
