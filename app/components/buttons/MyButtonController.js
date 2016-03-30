/**
 * Created by Administrator on 2016/3/30.
 */
import React from 'react'
import ListStore from '../../stores/ListStore'
import ButtonActions from  '../../actions/ButtonActions'
import * as UserActionCreators from  '../../actions/UserActionCreators'
import MyButton from './MyButton'

var MyButtonController = React.createClass({
    //
    getInitialState: function () {
        return {
            items: ListStore.getAll()
        };
    },
//
    componentDidMount: function() {
        ListStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ListStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
           return ListStore.getAll()
    },

    createNewItem: function (event) {
        UserActionCreators.requestUser("jeffer",['name', 'avatarUrl']);
        ButtonActions.addNewItem('测试数据');
    },

    render: function() {
        return(
            <MyButton items={this.state.items} onClick={this.createNewItem}/>
        )
    }
});

module.exports = MyButtonController;