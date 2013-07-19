Ext.define('PinBoard.controller.MainController', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            mainView : 'main'
        },

        control: {
        }

    },

    showNewWhiteBoard: function(){
        this.getMainView().setActiveItem('newwhiteboard', {type: 'slide', direction: 'right', duration: 300});
    },

    showWhiteBoard: function(){
        this.getMainView().setActiveItem('whiteboard', {type: 'slide', direction: 'right', duration: 300});
    },

    showEditWhiteBoard: function(argWhiteBoard){
        this.getMainView().setActiveItem('editwhiteboard', {type: 'slide', direction: 'right', duration: 300});
        this.getEditController().setWhiteBoardData(argWhiteBoard);
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
    },

    getEditController: function(){
        return this.getApplication().getController('whiteboard.EditWhiteBoardController');
    }

});