/**
 * Created by jeffer on 2016/4/2.
 */
import './../../less/login.less';
import React from 'react'
import LoginStore from  './../../stores/LoginStore';
import {Panel, Input,Button ,ButtonToolbar} from 'react-bootstrap';
var styles = {};
styles.container={
    padding: 11,
    fontWeight: 220

}

var LoginController = React.createClass( {
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
        let style = 'danger';
        if (length > 3) style = 'success';
        else if (length > 2) style = 'warning';
        let disabled = style !== 'success';
        return { style, disabled };
    },
   handleChange: function (){
        this.setState( this.validationState() );
    },
    handleSubmit(event) {
        event.preventDefault()
        const email = this.refs.email.value
        const pass = this.refs.pass.value
        LoginStore.login(email, pass).then(function (response) {
            debugger;
            response.json().then(json => {
                console.log(json[0].text);
            })
        }, function (response) {
            debugger;
            response.json().then(json => {
                console.log(json[0].text);
            })
        })
        /**
         * , (loggedIn) => {
            if (!loggedIn)
                return this.setState({ error: true })

            const { location } = this.props

            if (location.state && location.state.nextPathname) {
                this.context.router.replace(location.state.nextPathname)
            } else {
                this.context.router.replace('/')
            }
        }
         */
    },
    render: function() {
        return (
            <div >
                    <form  onSubmit={this.handleSubmit}>
                        <div  className="form-horizontal" >
                            <Input type="text" label="用户名:" labelClassName="col-xs-4" className="input-lg" wrapperClassName="col-xs-4" ref="email" onChange={this.handleChange} />
                            <Input type="password" label="密码:" labelClassName="col-xs-4" className="input-lg" wrapperClassName="col-xs-4" ref="pass" />
                            <Input type="checkbox" label="记住密码" wrapperClassName="col-xs-offset-4 col-xs-4" />
                            <ButtonToolbar className="col-xs-5" >
                                <Button className="pull-right" type="reset" bsStyle="default"   onClick={this.resetValidation}  >重置</Button>
                                <Button className="pull-right"   type="submit"  bsStyle="primary"  value="submit"  disabled={this.state.disabled} >登录</Button>
                            </ButtonToolbar>
                        </div>
                    </form>
            </div>
        )
    }
})

module.exports = LoginController
