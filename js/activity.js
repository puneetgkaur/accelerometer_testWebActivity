var activity_cordova;
// need to define the module properly like in cordova.js else they give error in javascript
// that the module has not been defined properly 
define("sugar/activity", function(require, exports, module) {

    var activity = require("sugar-web/activity/activity");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {
 
        // Initialize the activity.
        activity.setup();
	activity_cordova = activity.cordova;

    });
});
