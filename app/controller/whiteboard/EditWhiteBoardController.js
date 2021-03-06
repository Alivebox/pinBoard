Ext.define('PinBoard.controller.whiteboard.EditWhiteBoardController', {
    extend: 'Ext.app.Controller',

    require:[
        'Ext.Img'
    ],

    config: {
        refs: {
            whiteBoard: 'whiteboard',
            editWhiteBoard: 'editwhiteboard'
        },

        control : {
            editWhiteBoard:{
                tapEditBack: 'onTapEditBack',
                initialize: 'editAfterRender'
            }
        }
    },

    editAfterRender: function(){
        var tmpCWhiteBoardImage = this.getEditWhiteBoard().down('#cWhiteBoardImage');
        this.getApplication().myViewPort.element.on({
            taphold: function(tmpEvent, tmpNode) {
                Ext.Msg.prompt('Add a note', '',function(btnConfirm, txtText){
                    if (btnConfirm == 'ok'){
                        var tmpPoint = Ext.create('Ext.Label', {
                            left: tmpEvent.pageX,
                            top: tmpEvent.pageY - 55,
                            html: '<img height="35" width="35" src="resources/icons/blueLocation.png"/>'
                        });
                        tmpCWhiteBoardImage.add(tmpPoint);
                    }
                });
            }
        });
    },

    onTapEditBack:function(){
        this.getMainController().showWhiteBoard();
        this.getWhiteController().onRefreshList();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    },

    setWhiteBoardData:function(argWhiteBoard){
        this.getEditWhiteBoard().down('#whiteboardImage').setHtml('<img height="'+ (window.innerHeight * 2) +'" width="'+ window.innerWidth +'" src="'+ argWhiteBoard.data.imageUrl +'"/>');
    },

    getWhiteController: function(){
        return this.getApplication().getController('whiteboard.WhiteBoardController');
    }
});