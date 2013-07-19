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
            width: '100%',
            height: '100%',
            items: [
                {
                    xtype: 'label',
                    width: '100%',
                    height: '100%',
                    itemId: 'whiteboardImage'
                }
            ]
        };
        return tmpMenuContainer;
    }
});