Ext.define('PinBoard.view.whiteboard.WhiteBoard', {
    extend: 'Ext.Container',
    xtype: 'whiteboard',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.whiteBoardList = this.createWhiteboardList();
        this.menuContainer = this.createMenuContainer();
        this.add([
            this.header,
            this.whiteBoardList,
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
                {
                    xtype:'button',
                    name: 'newNoteButton',
                    iconCls: 'add',
                    ui: 'addbutton',
                    docked: 'bottom',
                    iconMask: true,
                    text: 'New WhiteBoard',
                    scope: this,
                    handler: this.onNewWhiteBoard
                }
            ]
        };
        return tmpMenuContainer;
    },

    createWhiteboardList: function(){
        var tmpList = {
            xtype: 'whiteboardlist',
            name: 'whiteBoardList',
            store: Ext.getStore("WhiteBoards"),
            listeners: {
                scope: this,
                itemtap: this.onEditNote,
                refresh: this.onRefreshData
            }
        };
        return tmpList;
    },

    onEditNote: function(argList,argIndex,argTarget,argNote,argE,eOpts){
        this.fireEvent("editWhiteBoard",argNote);
    },

    onRefreshData: function(argList,eOpts){
        this.fireEvent("refreshList",argList);
    },

    onNewWhiteBoard: function(){
        this.fireEvent("newWhiteBoard");
    }
});