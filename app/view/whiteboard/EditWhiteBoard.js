Ext.define('PinBoard.view.whiteboard.EditWhiteBoard', {
    extend: 'Ext.Container',
    xtype: 'editwhiteboard',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.callParent(arguments);
        this.header = this.createHeader();
        this.menuContainer = this.createMenuContainer();
        this.add([
            this.header,
            this.menuContainer
        ]);
    },

    createHeader: function(){
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'Edit WhiteBoard',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('tapEditBack')
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createMenuContainer: function(){
        var tmpMenuContainer = {
            xtype: 'container',
            items: [
                {
                    xtype: 'label',
                    itemId: 'whiteboardImage'
                }
            ]
        };
        return tmpMenuContainer;
    }
});