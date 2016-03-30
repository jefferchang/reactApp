/**
 * Created by Administrator on 2016/3/30.
 */
import EventEmitter from 'events' ;
import assign from 'object-assign';
import 'whatwg-fetch';
var EventE = EventEmitter.EventEmitter;
var ListStore = assign({}, EventE.prototype, {
    items: [] ,
    getAll: function () {
        return this.items;
    },
    addNewItemHandler: function (text) {
        this.items.push(text);
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

module.exports = ListStore;