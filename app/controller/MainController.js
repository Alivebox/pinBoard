Ext.define('PinBoard.controller.MainController', {

    extend: 'Ext.app.Controller',

    statics: {

        WHITE_BOARD: 'whiteboard',
        NEW_WHITE_BOARD: 'newwhiteboard',
        EDIT_WHITE_BOARD: 'editwhiteboard'
    },

    config: {

        refs: {
            mainView : 'main'
        }

    },

    showNewWhiteBoard: function(){
        this.getMainView().setActiveItem(PinBoard.contoller.MainController.NEW_WHITE_BOARD, {type: 'slide', direction: 'right', duration: 300});
    },

    showWhiteBoard: function(){
        this.getMainView().setActiveItem(PinBoard.contoller.MainController.WHITE_BOARD, {type: 'slide', direction: 'right', duration: 300});
    },

    showEditWhiteBoard: function(){
        this.getMainView().setActiveItem(PinBoard.contoller.MainController.EDIT_WHITE_BOARD, {type: 'slide', direction: 'right', duration: 300});
    },
    
    setRightAnimation: function() {
        var tmpLayout = this.getMainView().getLayout();
        var tmpAnimation = this.getMainView().getLayout().getAnimation();
        tmpAnimation.setDirection('right');
    },

    setLeftAnimation: function() {
        var tmpLayout = this.getMainView().getLayout();
        var tmpAnimation = this.getMainView().getLayout().getAnimation();
        tmpAnimation.setDirection('left');
    }



});