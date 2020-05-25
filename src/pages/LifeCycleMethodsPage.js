import React from 'react';

import SimpleClocks from '../components/SimpleClocks';
import SmartClocks from '../components/SmartClocks';

const LifeCycleMethodsPage = (props) => (
    <div>
        <SimpleClocks hours={10} minutes={20} seconds={39} />
        <SimpleClocks hours={12} minutes={50} seconds={30} />
        <SimpleClocks hours={14} minutes={45} seconds={10} />

        {!props.hide && <SmartClocks />}
    </div>
);

export default LifeCycleMethodsPage;
