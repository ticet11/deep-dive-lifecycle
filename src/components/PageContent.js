import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Discussion from './Discussion';
import Rules from './Rules';
import WorkFlow from './WorkFlow';

export default function() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Discussion} />
                <Route exact path="/Rules" component={Rules} />
                <Route exact path="/WorkFlow" component={WorkFlow} />
            </Switch>
        </div>
    )
}