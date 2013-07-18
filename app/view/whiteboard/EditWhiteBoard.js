Ext.define('PinBoard.view.whiteboard.EditWhiteBoard', {
    extend: 'Ext.Container',
    xtype: 'editwhiteboard',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.menuContainer = this.createMenuContainer();
        this.add([
            this.header,
            this.menuContainer
        ]);
        this.callParent(arguments);
    },

    createHeader: function(){
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'WhiteBoards',
            items: [
            ]
        };
        return tmpHeader;
    },

    createMenuContainer: function(){
        var tmpMenuContainer = {
            xtype: 'container',
            items: [
            ]
        };
        return tmpMenuContainer;
    }
});