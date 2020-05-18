import React from 'react';

import cats from './cats';
import FrameForImage from './FrameForImage';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <FrameForImage
                    header={ cats[0].headerText }
                    image={ cats[0].imageUrl }
                />
        
                <FrameForImage
                    header={ cats[1].headerText }
                    image={ cats[1].imageUrl }
                >
                    <h3>Some header</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur architecto similique, laudantium itaque dolore maiores et quaerat, cupiditate perspiciatis a, magnam commodi sunt quasi odio excepturi animi necessitatibus aliquid.
                    </p>
                </FrameForImage>
            </div>
        );
    }
}

export default App;
