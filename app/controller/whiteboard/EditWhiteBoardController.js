Ext.define('PinBoard.controller.whiteboard.EditWhiteBoardController', {
    extend: 'Ext.app.Controller',

    config: {
        control : {
        }
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});