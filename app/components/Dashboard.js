import './../less/index.less';
import React from 'react'
import { Link } from 'react-router'
import MyButtonController from './buttons/MyButtonController';
import IndexController from './index/IndexController';
import {Grid, Row,Col,Panel} from 'react-bootstrap';
class Dashboard extends React.Component {
    render() {
    return (
            <Grid>
                <Row className="show-grid">
                    <Col sm={18} md={9} >
                        <Panel header="信息列表" >
                            <div className="roll_index" >
                                <IndexController></IndexController>
                            </div>
                        </Panel>
                    </Col>
                    <Col sm={6} md={3}></Col>
                </Row>
            </Grid>
    )
  }
}

export default Dashboard
