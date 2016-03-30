/**
 * Created by Administrator on 2016/3/30.
 */
import Dispatcher from 'flux';
import ListStore from '../stores/ListStore';
var Dip = Dispatcher.Dispatcher;
var AppDispatcher = new Dip();
AppDispatcher.register(function (action) {
    switch(action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;
        default:
        // no op
    }
})
module.exports = AppDispatcher;