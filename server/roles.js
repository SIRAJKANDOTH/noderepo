// server/roles.js
const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
ac.grant("user")
 .readOwn("profile")
 .updateOwn("profile")

ac.grant("project manager")
 .extend("user")
 .readAny("profile")

ac.grant("super admin")
 .extend("user")
 .extend("project manager")
 .updateAny("profile")
 .deleteAny("profile")
 
 return ac;
})();
