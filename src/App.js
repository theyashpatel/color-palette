import React, { Component } from 'react';
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
    const customStyle = {
      margin:5,
      width:100,
      height:50,
      fontSize: 25,
      backgroundColor: "light gray",
      color: "black"
    }
    return (
      <div>
        <center>
          <h1>Color Palette Generator</h1>
          <h5>by Yash Patel</h5>
          <h1>{this.state.divisions}</h1>
          <button style={customStyle} name="add" onClick={this.handleChange}>+</button>
          <button style={customStyle} name="sub" onClick={this.handleChange}>-</button>
        </center>
        {this.drawDivisions(this.state.divisions)}
      </div>
    )
  }
}

export default App;
