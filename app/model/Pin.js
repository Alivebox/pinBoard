/**
 * Created with JetBrains PhpStorm.
 * User: RLEIVA
 * Date: 18/07/13
 * Time: 03:31 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('PinBoard.model.Pin', {
    extend: 'Ext.data.Model',

    config:{

        idProperty: "id",
        fields:[
            {
                name: "id",
                type: "int"
            },{
                name: 'whiteboard_id',
                type: 'int'
            },{
                name: 'x',
                type: 'int'
            },{
                name: 'y',
                type: 'int'
            },{
                name: 'message',
                type: 'string'
            }

        ],

        validations: [
            {
                type: 'presence',
                field: 'id'
            },{
                type: 'presence',
                field: 'message',
                message: 'Enter a message'
            }
        ],

        belongsTo: 'WhiteBoard'
    }
});