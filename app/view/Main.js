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
        this.callParent(arguments);
        this.add([
            {
                xtype: 'whiteboard'
            }
        ]);

    }

});