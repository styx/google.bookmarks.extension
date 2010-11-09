window.addEventListener("load", function() {
    var theButton;
    var toolbar = opera.contexts.toolbar;
    var ToolbarUIItemProperties = {
        title: "Add to Google bookmarks",
        icon: "icons/add-to-gbm-18.png",

        popup: {
            width: 550,
            height: 420
        },

        onclick: function() {
            var extension = window.opera.extension;
            var tab = extension.tabs.getFocused();

            if (tab) {
                var url = encodeURIComponent(tab.url);
                var title = encodeURIComponent(tab.title);
                // New variant with popup
                theButton.popup.href = 'http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=' + url + '&title=' + title;
            }
        }
    };
    theButton = toolbar.createItem(ToolbarUIItemProperties);
    toolbar.addItem(theButton);
}, false);
