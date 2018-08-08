const apis = require("./config/api-config");
const PORT = 9890;

apis.app.listen(process.env.PORT || PORT, function() {
    console.log("server connected to port " + PORT+"\n\nNOTE :\nUse /api endpoint to access APIs\n\nAPI information :\n\nGET /api/get/users	(For getting all users' data)\nPOST /api/add		(For adding new user data)\nDELETE /api/delete	(For deleting a user with some id)");	
});
