/**
 * Created with JetBrains PhpStorm.
 * User: RLEIVA
 * Date: 18/07/13
 * Time: 02:14 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('PinBoard.controller.General',{
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.device.Camera'
    ],
    config: {
        refs: {
            principal:'mainviewport'
        },
        control:{
            'mainviewport button[action=snapPicture]': {
                tap: 'openCamera'
            }
        }
    },
    openCamera: function(button,eve){
        Ext.device.Camera.capture({
            success: this.onCaptureSuccess,
            scope: this,
            quality : 85,//for testing havving this at 50 does faster uploads
            source: 'camera',
            destination: 'file'
        });
    },
    onCaptureSuccess: function(uri) {
        console.log('got foto:'+uri);
        var lostor = Ext.getStore('theImageQueue');
        lostor.add({
            src: uri,
            timestamp: new Date().getTime()
        });
        lostor.sync();
    }
});