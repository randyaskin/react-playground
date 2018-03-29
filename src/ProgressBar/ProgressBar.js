import React, { Component } from 'react';
import './ProgressBar.css';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {progress: parseInt(this.props.progress, 10)};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({progress: event.target.value});
  }
  render() {
    return (
      <div className="progressBar">
        <input className="progressBar__input" type="number" value={this.state.progress} onChange={this.handleChange} />
        <div className="progressBar__background">
          <div className="progressBar__fill" style={{transform: 'scaleX(' + this.state.progress / 100 + ')'}}></div>
        </div>
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  progress: 0
};
