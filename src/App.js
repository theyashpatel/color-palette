import React, { Component } from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
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

getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

drawDivisions(noOfDivisions) {
  const items = []
  for (var i = 0; i < noOfDivisions; i++) {
    var randomColor = this.getRandomColor()

    console.log(randomColor)
    items.push(<div onClick={this.handleCopy} key={i} title={randomColor} style={{backgroundColor: randomColor, position: "absolute", bottom: 0, top: "50%", width: window.innerWidth / noOfDivisions, marginLeft: (window.innerWidth/noOfDivisions) * i}}></div>)
  }
  return (
    <div>
      {items}
    </div>
  )
}

handleChange(event) {
  const {name} = event.target
  console.log(name)
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
    // const customStyle = {
    //   margin:5,
    //   width:100,
    //   height:50,
    //   fontSize: 25,
    //   backgroundColor: "light gray",
    //   color: "black"
    // }
    return (
      <div>
          <Segment textAlign="center" basic inverted padded="very">
            <Header inverted as="h1" color="white">Color Palette Generator</Header>
            <Header inverted as="h3" color="blue">by Yash Patel</Header>
          </Segment>
          <Segment.Group horizontal>
            <Segment textAlign="center">
              <Header as='h1' color="blue">
              {this.state.divisions}
              </Header>
            </Segment>
            <Segment textAlign="center">
              <Button.Group>
                <Button basic primary name="add" onClick={this.handleChange}>+</Button>
                <Button  basic primary name="sub" onClick={this.handleChange}>-</Button>
              </Button.Group>
            </Segment>
            <Segment textAlign="center">
            <Button basic primary name="gen" onClick={this.handleChange}>Generate</Button>
            </Segment>
          </Segment.Group>
        {this.drawDivisions(this.state.divisions)}
      </div>
    )
  }
}

export default App;
