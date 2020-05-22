import React from 'react';

import TrafficLights from '../components/TrafficLights';

const TrafficLightsPage = () => (
    <div className="main-section__content">
        <h1>
            Traffic Light
        </h1>

        <TrafficLights greenIsOn={true} />
        <TrafficLights redIsOn={true} />
        <TrafficLights yellowIsOn={true} />
    </div>
);

export default TrafficLightsPage;
