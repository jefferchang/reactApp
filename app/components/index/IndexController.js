/**
 * Created by jeffer on 2016/4/2.
 */
import React from 'react'
import {Media, Input,Button ,ButtonToolbar,Label} from 'react-bootstrap';
import { browserHistory, Router, Route, Link} from 'react-router'

var IndexController = React.createClass( {
   contextTypes: {
        router: React.PropTypes.object
    },
    render: function() {
        return (
            <div>
                    <Media className="center_index">
                        <Media.Left align="middle">
                            <img width={100} height={100}    src="./../../img/1.png" alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>Top aligned media</Media.Heading>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </Media.Body>
                        <div className="course_mouse">
                            &nbsp;<Label bsStyle="default">黑历史</Label>&nbsp;
                            &nbsp;<Label bsStyle="primary">红历史</Label>&nbsp;
                            &nbsp;<Label bsStyle="success">经历</Label>&nbsp;
                            &nbsp;<Label bsStyle="success">赞</Label>&nbsp;
                        </div>
                    </Media>

                <Media className="center_index">
                    <Media.Left align="middle">
                        <img width={100} height={100} src="./../../img/1.png" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Middle aligned media</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </Media.Body>
                    <div className="course_mouse">
                        &nbsp;<Label bsStyle="default">黑历史</Label>&nbsp;
                        &nbsp;<Label bsStyle="primary">红历史</Label>&nbsp;
                        &nbsp;<Label bsStyle="success">经历</Label>&nbsp;
                        &nbsp;<Label bsStyle="success">赞</Label>&nbsp;
                    </div>
                </Media>
                <Media className="center_index">
                    <Media.Left align="bottom">
                        <img width={100} height={100} src="./../../img/1.png" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Bottom aligned media</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </Media.Body>
                    <div className="course_mouse">
                        &nbsp;<Label bsStyle="default">黑历史</Label>&nbsp;
                        &nbsp;<Label bsStyle="primary">红历史</Label>&nbsp;
                        &nbsp;<Label bsStyle="success">经历</Label>&nbsp;
                        &nbsp;<Label bsStyle="success">赞</Label>&nbsp;
                    </div>
                </Media>
                <Media className="center_index">
                    <Media.Left align="bottom">
                        <img width={100} height={100} src="./../../img/1.png" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Bottom aligned media</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </Media.Body>
                    <div className="course_mouse">
                        &nbsp;<Label bsStyle="default" >黑历史</Label>&nbsp;
                        &nbsp;<Label bsStyle="primary">红历史</Label>&nbsp;
                        &nbsp;<Label bsStyle="success">经历</Label>&nbsp;
                        &nbsp;<Label bsStyle="success">赞</Label>&nbsp;
                    </div>
                </Media>
                <Media className="center_index">
                    <Media.Left align="bottom">
                        <img width={100} height={100} src="./../../img/1.png" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Bottom aligned media</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </Media.Body>
                    <div className="course_mouse">
                        &nbsp;<Label bsStyle="default">黑历史</Label>&nbsp;
                        &nbsp;<Label bsStyle="primary">红历史</Label>&nbsp;
                        &nbsp;<Label bsStyle="success">经历</Label>&nbsp;
                        &nbsp;<Label bsStyle="success">赞</Label>&nbsp;
                    </div>
                </Media>
            </div>
        )
    }
})

module.exports = IndexController
