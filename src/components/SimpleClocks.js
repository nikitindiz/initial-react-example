import React from 'react';

export default class SimpleClocks extends React.Component {
    render() {
        const {
            hours,
            minutes,
            seconds
        } = this.props;

        return (
            <div>
                <span>{hours}</span>:
                <span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
        );
    }

    componentDidUpdate() {
        console.log('Update on simple clocks');
    }
}
