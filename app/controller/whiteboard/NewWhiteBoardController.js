Ext.define('PinBoard.controller.whiteboard.NewWhiteBoardController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.device.Camera'
    ],

    config: {
        refs: {
            whiteBoard: 'whiteboard',
            newWhiteBoard: 'newwhiteboard'
        },

        control : {
            newWhiteBoard: {
                tapBack: 'onTapBack',
                takePhoto: 'onTakePhoto',
                saveWhiteBoard: 'onSaveWhiteBoard'
            }
        }
    },

    whiteBoard: undefined,

    onTapBack: function(){
        this.getMainController().showWhiteBoard();
    },

    onTakePhoto:function(){
        Ext.device.Camera.capture({
            success: this.onCaptureSuccess,
            scope: this,
            quality : 85,
            source: 'camera',
            destination: 'file'
        });
    },

    onCaptureSuccess: function(uri) {
        this.getNewWhiteBoard().down('#photoUrl').setValue(uri);
        var lostor = Ext.getStore('theImageQueue');
        lostor.add({
            src: uri,
            timestamp: new Date().getTime()
        });
        lostor.sync();
    },

    onSaveWhiteBoard:function(){
        var tmpNow = new Date();
        var tmpWBId = tmpNow.getTime();
        var tmpNewWB = Ext.create('PinBoard.model.WhiteBoard',{
            id: tmpWBId,
            name: this.getNewWhiteBoard().down('#whiteBoardName').getValue(),
            imageUrl: this.getNewWhiteBoard().down('#photoUrl').getValue()
        });
        if(this.whiteBoard == undefined){
            this.whiteBoard = Ext.create('PinBoard.view.whiteboard.WhiteBoard');
        }
        this.whiteBoard.setRecord(tmpNewWB);
        this.addWhiteBoardToStore(tmpNewWB);
        this.getMainController().showEditWhiteBoard(tmpNewWB);
    },

    addWhiteBoardToStore: function(argWhiteBoard){
        var tmpStore = Ext.getStore('WhiteBoards');
        if( !tmpStore.findRecord("id",argWhiteBoard.get("id")) ){
            tmpStore.add(argWhiteBoard);
        }
        tmpStore.sync();
        tmpStore.sort([
            {
                property: 'id',
                direction: 'DESC'
            }
        ]);
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});