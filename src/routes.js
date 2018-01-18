import React from 'react';
import {Route} from 'react-router'

import List from './components/List';
import Details from './components/Details';

export default (
    <div>
        <Route exact path={'/'} component={List}></Route>
        <Route path={'/details/:id'} component={Details}></Route>
    </div>
);