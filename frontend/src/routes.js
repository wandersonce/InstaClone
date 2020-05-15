import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Feed} /> {/* Using exact to call this route only if the url is exactly the same */}
            <Route path='/new' component={New} />
        </Switch>
    );
}

export default Routes;