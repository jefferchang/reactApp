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
        fetch('/rest/sys/department/deptTree.json').then(function(response){
                response.json().then(json => {
                    console.log(json[0].text);
                    ListStore.items.push(json[0].text);
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