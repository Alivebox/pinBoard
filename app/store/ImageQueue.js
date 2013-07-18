/**
 * Created with JetBrains PhpStorm.
 * User: RLEIVA
 * Date: 18/07/13
 * Time: 02:16 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('PinBoard.store.ImageQueue',{
    extend: 'Ext.data.Store',
    xtype:'imagesqueue',
    requires:['Ext.data.proxy.LocalStorage'],
    config: {
        fields:['timestamp','src'],
        storeId:'theImageQueue',
        autoLoad:true,
        proxy:{
            type:'localstorage',
            id:'idImagesQueue',
            reader: {
                type: 'json'
            }
        }
    }
});