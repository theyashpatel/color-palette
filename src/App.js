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
  const token = window.navigator.clipboard.writeText(event.target.title)
  console.log("copied")
  window.navigator.clipboard.readText().then((status, result) => console.log(status, result))
}

drawDivisions(noOfDivisions) {
  const items = []
  for (var i = 0; i < noOfDivisions; i++) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = "#" + randomColor
    console.log(randomColor)
    items.push(<div onClick={this.handleCopy} key={i} title={randomColor} style={{backgroundColor: randomColor, position: "absolute", bottom: 0, top: "30%", width: window.innerWidth / noOfDivisions, marginLeft: (window.innerWidth/noOfDivisions) * i}}></div>)
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
    return (
      <div>
        <center>
          <h1>{this.state.divisions}</h1>
          <button style={{margin: 10}} name="add" onClick={this.handleChange}>+</button>
          <button style={{margin: 10}} name="sub" onClick={this.handleChange}>-</button>
        </center>
        {this.drawDivisions(this.state.divisions)}
      </div>
    )
  }
}

export default App;
