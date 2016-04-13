/**
 * Created by Administrator on 2016/3/30.
 */
import EventEmitter from 'events' ;
import assign from 'object-assign';
import 'whatwg-fetch';
var EventE = EventEmitter.EventEmitter;
var LoginStore = assign({}, EventE.prototype, {
    items: [] ,
    login: function (name,pass) {
        return fetch('/user/userAction_getMemberListByMobilePhone.dhtml?mobilePhone=18510573985');
    }
});

module.exports = LoginStore;