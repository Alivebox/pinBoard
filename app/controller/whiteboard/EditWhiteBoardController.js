Ext.define('PinBoard.controller.whiteboard.EditWhiteBoardController', {
    extend: 'Ext.app.Controller',

    require:[
        'Ext.Img'
    ],

    config: {
        refs: {
            editWhiteBoard: 'editwhiteboard'
        },

        control : {
            editWhiteBoard:{
                tapEditBack: 'onTapEditBack'
            }
        }
    },

    onTapEditBack:function(){
        this.getMainController().showWhiteBoard();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    },

    setWhiteBoardData:function(argWhiteBoard){
        this.getEditWhiteBoard().down('#whiteboardImage').setHtml('<img src="'+argWhiteBoard.data.imageUrl+'"/>');
    }
});