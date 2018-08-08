const jwt = require('jsonwebtoken');

module.exports = function checkToken(req, res, next) {
  next();
   //  var token = req.headers['token'];
   //  if(token) {
   //    console.log(token);
   //    jwt.verify(token, 'my_secret_key',(err,decode)=>{
   //     //  if(err) {
   //     //    res.json({"status":500,
   //     //      "message":"INVALID TOKEN",
   //     //      "error":err.message
   //     //   });
   //     // } else {
   //        next();
   //      // }
   //    })
   //  } else {
   //    res.json({"status":500,
   //    "message":"NO TOKEN PROVIDED",
   //    "error":"token must be provided in header for endpoint access"
   // });
   //  }
  }


  