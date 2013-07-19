Ext.define('PinBoard.view.Main', {

    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'right'
            }
        },
        cardSwitchAnimation:'slide'
    },
    initialize: function(){
        this.add([
            {
                xtype: 'whiteboard'
            },
            {
                xtype: 'newwhiteboard'
            },
            {
                xtype: 'editwhiteboard'
            }
        ]);
        this.callParent(arguments);
    }

});