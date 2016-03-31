/**
 * Created by Administrator on 2016/3/30.
 */
import React from 'react'
import ListStore from '../../stores/ListStore'
import ButtonActions from  '../../actions/ButtonActions'
import MyButton from './MyButton'

var MyButtonController = React.createClass({
    //
    getInitialState: function () {
        return {
            items:  ListStore.getAll()
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
        this.setState({
            items: ListStore.getAll()
        });
    },

    createNewItem: function (event) {
        ButtonActions.addNewItem('连接成功！');
    },

    render: function() {
        return(
            <MyButton items={this.state.items} onClick={this.createNewItem}/>
        )
    }
});

module.exports = MyButtonController;