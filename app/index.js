import 'bootstrap/less/bootstrap.less';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import stubbedCourses from './stubs/COURSES'



const rootRoute = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./components/App'),
        childRoutes: [
            require('./routes/Calendar'),
            require('./routes/Course'),
            require('./routes/Grades'),
            require('./routes/Messages'),
            require('./routes/Profile')
           // require('./routes/Orders')
        ]
    }]
}
render((
    <Router history={browserHistory} routes={rootRoute}>
    </Router>
), document.getElementById('index'));

