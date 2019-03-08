import React, { Component } from 'react';
import { link, Route } from 'react-router-dom';

import Users from './containers/Users';
import AsyncComponent from './hoc/AsyncComponent';

const asyncPizza = AsyncComponent(() => {
    return import('./Containers/Pizza/Pizza');
});

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path='/' exact Component={Users} />
                    <Route path='/pizza' exact Component={asyncPizza} />
                </div>
            </div>
        )
    }
}

export default App;