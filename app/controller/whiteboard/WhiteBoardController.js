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
        this.getNewController().cleanView();
    },

    onRefreshList:function(){
        var tmpStore = Ext.getStore('wbStorage');
        tmpStore.sync();
//        if(tmpStore != undefined && tmpStore != null){
//            this.getWhiteBoard().whiteBoardList.store = tmpStore;
//        }
    },

    onEditWhiteBoard: function(argWhiteBoard){
        this.getMainController().showEditWhiteBoard(argWhiteBoard);
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    },

    getNewController: function(){
        return this.getApplication().getController('whiteboard.NewWhiteBoardController');
    }
});