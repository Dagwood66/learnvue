import Vue from "vue"
import Clipboard from "clipboard"

// npm install clipboard --save

Vue.directive("LClipboard", {
    inserted: function (el, {value}) {
        el.setAttribute("data-clipboard-text", value);
        let clipboard = new Clipboard(el);
        clipboard.on("success", function () {
            console.log(arguments[0].text);
        });
        clipboard.on("error", function () {
            console.log(arguments[0].text);
        });
    },
    update: function (el, {value}) {
        el.setAttribute("data-clipboard-text", value);
    },
    unbind: function (el) {

    }
});