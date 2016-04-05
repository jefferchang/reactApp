import Dispatcher from 'flux';
import ListStore from '../stores/ListStore';
import 'whatwg-fetch';
var Dip = Dispatcher.Dispatcher;
var AppDispatcher = new Dip();
AppDispatcher.register(function (action) {
    switch(action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            break;
        default:
    }
})
module.exports = AppDispatcher;