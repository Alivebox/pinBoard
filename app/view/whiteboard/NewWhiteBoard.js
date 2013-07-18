Ext.define('PinBoard.view.whiteboard.NewWhiteBoard', {
    extend: 'Ext.Container',
    xtype: 'newwhiteboard',
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
            title: 'New',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('tapBack')
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
            ]
        };
        return tmpMenuContainer;
    }
});