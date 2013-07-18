Ext.define('PinBoard.controller.MainController', {

    extend: 'Ext.app.Controller',

    statics: {

        LOGIN_VIEW: 'login'
    },

    config: {

        refs: {
            mainView : 'main'
        }

    },

    showWebFormSettingsView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.WEB_FORM_SETTINGS_VIEW, {type: 'slide', direction: 'right', duration: 300});
    },

    showCheckListView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.CHECK_LIST_VIEW, {type: 'slide', direction: 'right', duration: 300});
    },

    showListRequestView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.LIST_REQUEST_VIEW, {type: 'slide', direction: 'right', duration: 300});
    },

    showNewResquestFormView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.NEW_REQUEST_FORM_VIEW, {type: 'slide', direction: 'right', duration: 300});
    },

    showRequestTypeDetailView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.REQUEST_TYPE_DETAIL_VIEW, {type: 'slide', direction: 'right', duration: 300});
    },

    showLoginView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.LOGIN_VIEW, {type: 'slide', direction: 'right', duration: 300});
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