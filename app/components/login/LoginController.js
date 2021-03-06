/**
 * Created by jeffer on 2016/4/2.
 */
import './../../less/login.less';
import React from 'react'
import LoginStore from  './../../stores/LoginStore';
import {Panel,Grid,Col,Row, Input,Button ,ButtonToolbar} from 'react-bootstrap';
import { browserHistory, Router, Route, Link} from 'react-router'
var styles = {};
styles.container={
    padding: 11,
    fontWeight: 220

}

var LoginController = React.createClass( {
  /*  contextTypes: {
        router: React.PropTypes.object
    },*/
    getInitialState:function() {
        return {
            disabled: true,
            style: null
        };
    },
    resetValidation: function () {
        this.setState({
            disabled: true,
            style: null
        });
    },
    validationState :function() {
        let length = this.refs.email.getValue().length;
        let style = 'success';
        let disabled = style !== 'success';
        return { style, disabled };
    },
   handleChange: function (){
        this.setState( this.validationState() );
    },
    handleSubmit(event) {
        event.preventDefault()
        var vm=this;
        const email = this.refs.email.value
        const pass = this.refs.pass.value

        const { location } = this.props
            //this.context.router.replace('m_index')
       LoginStore.login(email, pass).then(function (response) {
            response.json().then(json => {
                if(json){
                    window.location.href= "/";
                }
                return true;
            })
        }, function (response) {
            response.json().then(json => {
                console.log(json[0].text);
            })
        })
    },
    render: function() {
        return (
            <div>
                    <form  onSubmit={this.handleSubmit}>
                        <div  className="form-horizontal" >
                            <Input type="text" label="用户名:" labelClassName="col-xs-4" className="input-lg" wrapperClassName="col-xs-4" ref="email" onChange={this.handleChange} />
                            <Input type="password" label="密码:" labelClassName="col-xs-4" className="input-lg" wrapperClassName="col-xs-4" ref="pass" />
                            <Input type="checkbox" label="记住密码" wrapperClassName="col-xs-offset-4 col-xs-4" />

                            <Grid>
                                <Row className="show-grid">
                                    <Col sm={12} md={5} >
                                        <Button className="pull-right"   type="submit"  bsStyle="primary"  value="submit"  disabled={this.state.disabled} >登录</Button>
                                    </Col>
                                    <Col sm={12} md={1}>
                                        <Button className="pull-right" type="reset" bsStyle="default"   onClick={this.resetValidation}  >重置</Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </form>
            </div>
        )
    }
})

module.exports = LoginController
