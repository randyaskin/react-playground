import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      <Header />
      <ProgressBar progress="40" />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img className="headerLogo" src={logo} alt="logo" />
      <header className="title">My React App</header>
    </div>
  );
}

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {progress: this.props.progress};

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

ProgressBar.defaultProps = {
  progress: 0
};

export default App;
