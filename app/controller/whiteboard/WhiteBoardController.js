Ext.define('PinBoard.controller.whiteboard.WhiteBoardController', {
    extend: 'Ext.app.Controller',

    config: {

        refs: {
            whiteBoard: 'whiteboard'
        },

        control : {
            whiteBoard:{
                newWhiteBoard: 'onNewWhiteBoard',
                refreshList: 'onRefreshList',
                editWhiteBoard: 'onEditWhiteBoard'
            }
        }
    },

    onNewWhiteBoard: function(){
        this.getMainController().showNewWhiteBoard();
    },

    onRefreshList:function(){
        var tmpStore = Ext.getStore('WhiteBoards');
        tmpStore.sync();
    },

    onEditWhiteBoard: function(argWhiteBoard){
        this.getMainController().showEditWhiteBoard(argWhiteBoard);
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});