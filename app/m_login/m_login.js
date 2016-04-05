import 'bootstrap/less/bootstrap.less';
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory} from 'react-router'


const rootRoute = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./../components/login/Login'),
        childRoutes: [
            require('./../routes/Login')
        ]
    }]
}
render(
    <Router history={browserHistory} routes={rootRoute} />
 , document.getElementById('index'));
