import 'bootstrap/less/bootstrap.less';
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory} from 'react-router'


const rootRoute = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./components/App'),
        childRoutes: [
            require('./routes/Login'),
            require('./routes/Calendar'),
            require('./routes/Course'),
            require('./routes/Messages'),
            require('./routes/Grades'),
            require('./routes/Profile')
        ]
    }]
}
render(
    <Router history={browserHistory} routes={rootRoute} />
 , document.getElementById('index'));
