/**
 * Created with JetBrains PhpStorm.
 * User: RLEIVA
 * Date: 18/07/13
 * Time: 03:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("PinBoard.view.whiteboard.WhiteBoardList", {

    extend: "Ext.dataview.List",
    alias: 'widget.whiteboardlist',
    name: 'whiteboardlist',

    config: {
        loadingText: 'Loading your whiteboards...',
        grouped: true,
        emptyText:
            '<pre>' +
                '<div>+Empty List</div>' +
                '</pre>',
        itemTpl:
            '<pre>' +
                '<div style="height:10px;">' +
                '<label>{name}</label>' +
                '</div>' +
                '</pre>'
    }

});