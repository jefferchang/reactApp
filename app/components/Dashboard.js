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
                        <Panel header="信息列表">
                            <IndexController></IndexController>
                        </Panel>
                    </Col>
                    <Col sm={6} md={3}><br/>{'据日本ANN电视台报道，4月19日上午11点半左右，一辆前往熊本县地震现场参与救援的自卫队油罐车在道路上发生侧翻，造成一名坐在副驾驶座上的男子受轻伤。日本熊本地震目前共造成44人遇难，据《读卖新闻》报道，随着熊本地震受灾程度不断加重，日本政府拟将派往灾区救援的自卫队人数从此前的约3100人增加至约2.5万人。日本防卫省将设立“统合任务部队”，专门指挥参与救援的陆海空自卫队。日本防卫大臣中谷元16日表示，正在考虑接受美军支援。'}</Col>
                </Row>
            </Grid>
    )
  }
}

export default Dashboard
