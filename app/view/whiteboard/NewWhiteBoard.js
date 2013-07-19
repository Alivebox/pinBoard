Ext.define('PinBoard.view.whiteboard.NewWhiteBoard', {
    extend: 'Ext.Container',
    xtype: 'newwhiteboard',
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
                {
                    xtype:'button',
                    itemId: 'takePhoto',
                    text: 'Take a Photo',
                    scope: this,
                    handler: this.onTakePhoto,
                    margin: '10 10 10 10'
                },{
                    xtype: 'textfield',
                    label: 'Photo Url',
                    itemId: 'photoUrl',
                    placeHolder: 'Click on take a picture button',
                    readOnly: true,
                    scope: this
                },{
                    xtype: 'textfield',
                    label: 'White Board Name',
                    itemId: 'whiteBoardName',
                    placeHolder: 'Add a name',
                    scope: this
                },{
                    xtype:'button',
                    itemId: 'saveButton',
                    text: 'Save',
                    scope: this,
                    handler: this.onSaveWhiteboard,
                    margin: '10 10 10 10'
                }
            ]
        };
        return tmpMenuContainer;
    },

    onTakePhoto: function(){
        this.fireEvent('takePhoto')
    },

    onSaveWhiteboard:function(){
        this.fireEvent('saveWhiteBoard')
    }
});