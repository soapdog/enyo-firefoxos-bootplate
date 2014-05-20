/**
 For simple applications, you might define all of your views in this file.
 For more complex applications, you might choose to separate these kind definitions
 into multiple files under this folder.
 */

enyo.kind({
    name: "myapp.MainView",
    kind: "FittableRows",
    fit: true,
    components:[
        {
            kind: "gaia.Drawer",
            title: "Settings"
        },
        {
            kind: "gaia.Region",
            components: [

                {
                    kind: "gaia.Header",
                    hasDrawer: true,
                    components: [
                        {kind: "gaia.HeaderMenu", components: [
                            {kind: "gaia.IconButton", icon: "icon-add"},
                            {kind: "gaia.IconButton", icon: "icon-edit", ontap: "test"}
                        ]},
                        {kind: "gaia.HeaderTitle", content: "Hello Gaia"}
                    ]
                },
                {
                    allowHtml: true,
                    fit: true,
                    classes: "center",
                    content: "<h1>Gaia meet Enyo</h1>"
                },
                {
                    kind: "gaia.Toolbar",
                    components: [
                        {kind: "gaia.ActionButton", icon: "calendar-dayview"},
                        {kind: "gaia.ActionButton", icon: "move"}
                    ],
                    rightSideComponents: [
                        {kind: "gaia.ActionButton", icon: "email-flag", ontap: "test"}
                    ]
                }
            ]
        }
    ],
    test: function(inSender, inEvent) {
        this.log("Tap from view!");

        this.createComponent({
            kind: "gaia.Status",
            status: "this is a <b>test!</b>",
            name: "status"
        });

        this.$.status.render();
        setTimeout(this.bindSafely("clearStatus"), 5000);
    },
    clearStatus: function() {
        this.$.status.destroy();
    },
    setupItem: function(inSender, inEvent) {
        // given some available data.
        var data = "aaaaa";
        // setup the controls for this item.
        this.$.name.setContent(data);
        this.$.index.setContent(inEvent.index);
    },
    itemTap: function(inSender, inEvent) {
        alert("You tapped on row: " + inEvent.index);
    }
});
