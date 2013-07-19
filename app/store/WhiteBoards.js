/**
 * Created with JetBrains PhpStorm.
 * User: RLEIVA
 * Date: 18/07/13
 * Time: 04:10 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains PhpStorm.
 * User: RLEIVA
 * Date: 18/07/13
 * Time: 04:10 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('PinBoard.store.WhiteBoards', {

    extend: 'Ext.data.Store',

    config: {
        model: 'PinBoard.model.WhiteBoard',
        autoLoad: true,
        storeId:'wbStorage',
        proxy: {
            type: 'localstorage',
            id: 'whiteBoardItemsStore'
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