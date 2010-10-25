window.addEventListener("load", function() {
    var theButton;
    var toolbar = opera.contexts.toolbar;
    var ToolbarUIItemProperties = {
        title: "Add to Google bookmarks",
        icon: "icons/icon-22.png",

        onclick: function() {
            var extension = window.opera.extension;
            var tab = extension.tabs.getFocused();

            if (tab) {
                var url = encodeURIComponent(tab.url);
                var title = encodeURIComponent(tab.title);
                newtab = extension.tabs.create({ url:'http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=' + url + '&title=' + title,
                    focused: true
                });
            }
        }
    };
    theButton = toolbar.createItem(ToolbarUIItemProperties);
    toolbar.addItem(theButton);
}, false);
