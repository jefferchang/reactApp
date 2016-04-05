/**
 * Created by Administrator on 2016/3/30.
 */
import React from 'react';
import {Button} from 'react-bootstrap';
var MyButton = function(props){
    var items=props.items;
    var itemHtml = items.map(function (listItem, i) {
        return <li key={i}>{listItem}</li>;
    });
    return (
        <div>
            <ul>{itemHtml}</ul>
            <Button onClick={props.onClick}  bsStyle="success" >Button</Button>
        </div>
    )
};

module.exports=MyButton;