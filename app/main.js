System.register(['angular2/platform/browser', './slds-button.component'], function(exports_1) {
    var browser_1, slds_button_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (slds_button_component_1_1) {
                slds_button_component_1 = slds_button_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(slds_button_component_1.ButtonComponent);
        }
    }
});
//# sourceMappingURL=main.js.map