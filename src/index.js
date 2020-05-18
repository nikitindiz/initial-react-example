import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const appContent = (
    <div className="app">
        <div className="frame">
            <h1 className="frame__header">
                Some nice picture of cat
            </h1>

            <div className="frame__content">
                <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"/>
            </div>
        </div>

        <div className="frame">
            <h1 className="frame__header">
                This cat's name is Tom
            </h1>

            <div className="frame__content">
                <img src="https://lh3.googleusercontent.com/proxy/YanKy8j-SY4jvwVcFDyKJnurV3hR9KzNYVlYnYJoMwQhnLCIsyif7H7FjAuuPuCe6ez7CleUetDEVWIbFgCGnogwgFapAN8jwLVCjFxjP0sYABj59P-iljDO95NrbJdkAH4e993FZmdYr0pB"/>
            </div>
        </div>
    </div>
);

const rootElement = document.getElementById('react-app');

ReactDOM.render(appContent, rootElement);