Ext.define('PinBoard.controller.whiteboard.NewWhiteBoardController', {
    extend: 'Ext.app.Controller',

    config: {
        control : {
        }
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});