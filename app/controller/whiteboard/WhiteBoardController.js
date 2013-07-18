Ext.define('PinBoard.controller.whiteboard.WhiteBoardController', {
    extend: 'Ext.app.Controller',

    config: {
        control : {
        }
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});