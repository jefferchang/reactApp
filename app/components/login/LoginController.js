/**
 * Created by jeffer on 2016/4/2.
 */
import './../../less/login.less';

import React from 'react'
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
        let length = this.refs.input.getValue().length;
        let style = 'danger';
        if (length > 10) style = 'success';
        else if (length > 5) style = 'warning';
        let disabled = style !== 'success';
        return { style, disabled };
    },
   handleChange: function (){
        this.setState( this.validationState() );
    },
    render: function() {
        return (
            <div  >
                    <form>
                        <div  className="form-horizontal" >
                            <Input type="text" label="用户名:" labelClassName="col-xs-4" className="input-lg" wrapperClassName="col-xs-4" ref="input" onChange={this.handleChange} />
                            <Input type="password" label="密码:" labelClassName="col-xs-4" className="input-lg" wrapperClassName="col-xs-4" />
                            <Input type="checkbox" label="记住密码" wrapperClassName="col-xs-offset-4 col-xs-4" />
                            <ButtonToolbar className="col-xs-5" >
                                <Button className="pull-right" type="reset" bsStyle="default"   onClick={this.resetValidation}  >重置</Button>

                                <Button className="pull-right" type="submit"bsStyle="primary"  value="submit"  disabled={this.state.disabled} >登录</Button>
                            </ButtonToolbar>
                        </div>

                    </form>
            </div>
        )
    }
})

module.exports = LoginController
