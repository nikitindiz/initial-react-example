import React from 'react';

import SimpleClocks from './SimpleClocks';

export default class SmartClocks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hrs: 0,
            min: 0,
            sec: 0,
            live: false,
        };
    }

    start = () => {
        this.setState({ live: true });
    };

    stop = () => {
        this.setState({ live: false });
    };

    render() {
        const {
            hrs,
            min,
            sec
        } = this.state;

        return (
            <div>
                <SimpleClocks hours={hrs} minutes={min} seconds={sec} />

                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
            </div>
        );
    }

    componentDidMount() {
        this.itvlRef = setInterval(() => {
            if (this.state.live) {
                const date = new Date();

                const hrs = date.getHours();
                const min = date.getMinutes();
                const sec = date.getSeconds();

                this.setState({ hrs, min, sec });
            }
        }, 1000);
    }

    componentWillUnmount() {
        console.log('Will be unmounted');
        clearInterval(this.itvlRef);
    }
}