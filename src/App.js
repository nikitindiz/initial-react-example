import React from 'react';

import Navigation from './components/Navigation';
import FrameForImagePage from './pages/FrameForImagePage';
import TrafficLightsPage from './pages/TrafficLightsPage'
import TrafficLightsCtrlBtnPage from './pages/TrafficLightsCtrlBtnPage'

import './App.css';

const App = () => (
    <div className="app">
        <Navigation />

        <div className="main-section main-section--with-left-sidebar">
            <div className="main-section__toolbar">
                {window.location.search === '' && 'Cats gallery'}

                {window.location.search === '?page=traffic-lights' && 'Traffic lights'}
            </div>

            {window.location.search === '' && <FrameForImagePage />}

            {window.location.search === '?page=traffic-lights' && <TrafficLightsPage />}

            {window.location.search === '?page=traffic-lights-controlled-btns' && <TrafficLightsCtrlBtnPage />}
        </div>
    </div>
);

export default App;
