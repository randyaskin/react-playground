import React, { Component } from 'react';
import './App.css';

function App(props) {
  return <span>Progress:<ProgressBar /></span>;
}

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {progress: 0};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({progress: event.target.value});
  }
  render() {
    return (
      <div className="container">
        <input className="progress" type="number" value={this.state.progress} onChange={this.handleChange} />
        <div id="background" className="background">
          <div id="fill" className="fill" style={{transform: 'scaleX(' + this.state.progress / 100 + ')'}}></div>
        </div>
      </div>
    );
  }
}

export default App;