/**
 * Created by Administrator on 2016/3/30.
 */
import * as AppDispatcher from '../dispatcher/AppDispatcher';

var ButtonActions = {
    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    },
};

module.exports = ButtonActions;