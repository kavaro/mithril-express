/**
 * Created by karl on 21/1/15.
 */

var render = require('mithril-node-render');
var views = {};

module.exports = function(path, ctrl, callback) {
    try {
        var view = views[path] || (views[path] = require(path));
        callback(null, render(view(ctrl)));
    } catch(err) {
        callback(err);
    }
};