import React from 'react';

import ProgressBar from '../components/ProgressBar';

class InputsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progressValue: 50,
        };
    }

    render() {
        return (
            <div>
                <ProgressBar value={this.state.progressValue} />

                <div style={{ padding: 20 }}>
                    <input
                        type="number"
                        value={this.state.progressValue}
                        onChange={(event) => {
                            this.setState({
                                progressValue: event.target.value,
                            });
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default InputsPage;