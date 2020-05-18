import React from 'react';
import ReactDOM from 'react-dom';

import cats from './cats';
import FrameForImage from './FrameForImage';

import './index.css';

const appContent = (
    <div className="app">
        <FrameForImage
            header={ cats[0].headerText }
            image={ cats[0].imageUrl }
        />

        <FrameForImage
            header={ cats[1].headerText }
            image={ cats[1].imageUrl }
        />
    </div>
);

const rootElement = document.getElementById('react-app');

ReactDOM.render(appContent, rootElement);