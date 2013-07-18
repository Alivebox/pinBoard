/**
 * Created with JetBrains PhpStorm.
 * User: RLEIVA
 * Date: 18/07/13
 * Time: 03:25 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('PinBoard.model.WhiteBoard', {
    extend: 'Ext.data.Model',

    config:{

        idProperty: "id",
        fields:[
            {
                name: "id",
                type: "int"
            },{
                name: 'name',
                type: 'string'
            },{
                name: 'imageUrl',
                type: 'string'
            }

        ],

        validations: [
            {
                type: 'presence',
                field: 'id'
            }, {
                type: 'presence',
                field: 'name'
            },{
                type: 'presence',
                field: 'imageUrl',
                message: 'Please take a photo.'
            }
        ],

        hasMany: 'Pin'
    }
});