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
        return fetch('/rest/sys/department/deptTree.json');
    }
});

module.exports = LoginStore;