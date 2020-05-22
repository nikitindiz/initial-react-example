import React from 'react';

import './TrafficLights.css';

const TrafficLights = (props) => (
    <div className="traffic-lights">
      <div
        className={props.redIsOn
        ? "traffic-lights__light traffic-lights__light--red traffic-lights__light--active"
        : "traffic-lights__light traffic-lights__light--red"}
      />
      <div
        className={props.yellowIsOn
        ? "traffic-lights__light traffic-lights__light--yellow traffic-lights__light--active"
        : "traffic-lights__light traffic-lights__light--yellow"}
      />
      <div
        className={props.greenIsOn
        ? "traffic-lights__light traffic-lights__light--green traffic-lights__light--active"
        : "traffic-lights__light traffic-lights__light--green"}
      />
    </div>
);

export default TrafficLights;