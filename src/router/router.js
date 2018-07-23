import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1';
import Page2 from 'pages/Page2/Page2';
import Counter from 'pages/Counter/Counter';
import UserInfo from 'pages/UserInfo/UserInfo';


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/page2">Page2</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">user</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/userinfo" component={UserInfo}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;