import React from 'react';

import './ProgressBar.css';

class ProgressBar extends React.Component {
    render() {
        return (
            <div className="progress-bar">
                <div className="progress-bar__bar" style={{ width: `${this.props.value}%` }}/>
            </div>
        );
    }
}

export default ProgressBar;
