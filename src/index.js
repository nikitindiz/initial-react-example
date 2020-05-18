import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const cats = [
    {
        headerText: 'Some nice picture of cat',
        imageUrl: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    },
    {
        headerText: 'This cat\'s name is Tom',
        imageUrl: 'https://lh3.googleusercontent.com/proxy/YanKy8j-SY4jvwVcFDyKJnurV3hR9KzNYVlYnYJoMwQhnLCIsyif7H7FjAuuPuCe6ez7CleUetDEVWIbFgCGnogwgFapAN8jwLVCjFxjP0sYABj59P-iljDO95NrbJdkAH4e993FZmdYr0pB',
    },
];

const appContent = (
    <div className="app">
        <div className="frame">
            <h1 className="frame__header">
                { cats[0].headerText }
            </h1>

            <div className="frame__content">
                <img src={ cats[0].imageUrl }/>
            </div>
        </div>

        <div className="frame">
            <h1 className="frame__header">
                { cats[1].headerText }
            </h1>

            <div className="frame__content">
                <img src={ cats[1].imageUrl } />
            </div>
        </div>
    </div>
);

const rootElement = document.getElementById('react-app');

ReactDOM.render(appContent, rootElement);