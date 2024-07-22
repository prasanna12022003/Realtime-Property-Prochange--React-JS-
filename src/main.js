import React from 'react';
import {Dimmer, Loader, Message} from 'semantic-ui-react';

const Main = () => {
    return (
        <div className="welcome">
            <center><h1>Welcome!</h1>
            <Message>
              <Dimmer active inverted>
                <Loader inverted>Loading! Please Wait</Loader>
              </Dimmer>
            </Message>
            </center>
        </div>
    );
};

export default Main;
