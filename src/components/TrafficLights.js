import React from 'react';

import './TrafficLights.css';

const TrafficLights = (props) => {
  const { redIsOn, yellowIsOn, greenIsOn } = props;

  return (
    <div className="traffic-lights">
      <div
        className={redIsOn
        ? "traffic-lights__light traffic-lights__light--red traffic-lights__light--active"
        : "traffic-lights__light traffic-lights__light--red"}
      />
      <div
        className={yellowIsOn
        ? "traffic-lights__light traffic-lights__light--yellow traffic-lights__light--active"
        : "traffic-lights__light traffic-lights__light--yellow"}
      />
      <div
        className={greenIsOn
        ? "traffic-lights__light traffic-lights__light--green traffic-lights__light--active"
        : "traffic-lights__light traffic-lights__light--green"}
      />
    </div>
  );
};

export default TrafficLights;