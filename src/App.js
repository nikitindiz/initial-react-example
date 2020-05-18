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
                />
            </div>
        );
    }
}

export default App;
