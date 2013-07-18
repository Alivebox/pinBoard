/**
 * Created with JetBrains PhpStorm.
 * User: RLEIVA
 * Date: 18/07/13
 * Time: 04:10 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('PinBoard.store.Pins', {

    extend: 'Ext.data.Store',

    config: {
        model: 'PinBoard.model.Pin',
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'pinItemsStore'
        },
        sorters: [
            {
                property: 'id',
                direction: 'DESC'
            }
        ],
        grouper: {
            sortProperty: "id",
            direction: "DESC",
            groupFn: function(argRecord){
                if(argRecord && argRecord.get('id')) {
                    return argRecord.get('id').toString();
                }
                return '';
            }
        }
    }

});