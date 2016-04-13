/**
 * Created by Administrator on 2016/3/30.
 */
import EventEmitter from 'events' ;
import assign from 'object-assign';
import 'whatwg-fetch';
var EventE = EventEmitter.EventEmitter;
const CHANGE_EVENT = 'change';
var ListStore = assign({}, EventE.prototype, {
    items: [] ,
    getAll: function () {
        return this.items;
    },
    addNewItemHandler: function (text) {
        fetch('/user/userAction_getMemberListByMobilePhone.dhtml?mobilePhone=18510573985').then(function(response){
                response.json().then(json => {
                    console.log(json[0].userName);
                    ListStore.items.push(json[0].userName);
                    ListStore.emitChange();
                });
        },function(response){
            ListStore.items.push('连接失败！');
            ListStore.emitChange();
        })
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

module.exports = ListStore;