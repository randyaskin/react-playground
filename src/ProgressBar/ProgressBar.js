import React from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
  return (
    <div className="progressBar">
      <div className="progressBar__background">
        <div className="progressBar__fill" style={{transform: 'scaleX(' + props.value / props.max + ')'}}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
