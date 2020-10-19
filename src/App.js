import React, { Component } from 'react';
import { BrowserView } from 'react-device-detect';
import { Button, Header, Segment } from 'semantic-ui-react';
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
  const items = []
  for (var i = 0; i < noOfDivisions; i++) {
    var randomColor = getRandomColor()
    items.push(<div onClick={this.handleCopy} key={i} title={randomColor} style={{backgroundColor: randomColor, position: "absolute", bottom: 0, top: "50%", width: window.innerWidth / noOfDivisions, marginLeft: (window.innerWidth/noOfDivisions) * i}}></div>)
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

handleChange(event) {
  const {name} = event.target
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
    return (
      <div>
        <BrowserView>
          <CustomHeader themeColor={colorTheme} />
        </BrowserView>
      <Segment.Group horizontal>
      <CustomThemeSelect theme={colorTheme} handleTheme={this.handleTheme} />
        <Segment textAlign="center">
          <Header as='h1' color={colorTheme}>
          {this.state.divisions}
          </Header>
        </Segment>
        <Segment textAlign="center">
          <Button.Group>
            <Button basic color={colorTheme} name="add" onClick={this.handleChange}>+</Button>
            <Button  basic color={colorTheme} name="sub" onClick={this.handleChange}>-</Button>
          </Button.Group>
        </Segment>
        <Segment textAlign="center">
        <Button basic color={colorTheme} name="gen" onClick={this.handleChange}>Generate</Button>
        </Segment>
      </Segment.Group>
        {this.drawDivisions(this.state.divisions)}
      </div>
    )
  }
}

export default App;
