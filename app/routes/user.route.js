var fs = require('fs');

function init(router) {
  // GET /api/get/users | To get all users' data with GET request
  router.route('/get/users')
    .get(getAllUsers); 

  // POST /api/add | To add a new user with POST data passed in POST request
  router.route('/add')
    .post(addUser); 

  // DELETE /api/delete | To delete a user with id passed as POST paramete in DELETE request  
  router.route('/delete')
    .delete(deleteUser);
}

function getAllUsers(req,res) {
  //Get user data from data.txt file
  fs.readFile('data.txt', function(err, data) {
    if(err) throw err;
    res.json({"result":"success","status":200,"msg":"Users fetched","users":JSON.parse(data.toString())});  
  });
}

function addUser(req,res) {
  //Get user data from data.txt file
  fs.readFile('data.txt', function(err, data) {
    if(err) throw err;
    
    var old_data=JSON.parse(data.toString());
    var no_of_old_records=Object.keys(old_data).length;
    
    old_data[no_of_old_records]={"id":req.body.id,"name":req.body.name};

    var new_data=JSON.stringify(old_data);

    //Update data.txt file with new data
    fs.truncate("data.txt", 0, function() {
      fs.writeFile("data.txt", new_data, function (err) {
        if (err) {
          return console.log("Error writing file: " + err);
        }else{
          res.json({"result":"success","status":200,"msg":"User added"});  
        }
      });
    });
  });
}

function deleteUser(req,res) {
  //Get user data from data.txt file
  fs.readFile('data.txt', function(err, data) {
    if(err) throw err;
    var old_data=JSON.parse(data.toString());
    var new_data=[];
    var new_data_index=0;
    var user_removed=false;
    var keys = Object.keys(old_data);
    
    //Get user data from file avoiding data for user with passed id in the request
    for (var i=0;i<keys.length;i++){
      if(old_data[keys[i]].id!=req.body.id){
        new_data[new_data_index]=old_data[keys[i]];
        ++new_data_index;
      }else{
        user_removed=true;
      }
    }

    var new_data=JSON.stringify(new_data);

    //Update data.txt file with new data post deleting user of passed id
    fs.truncate("data.txt", 0, function() {
      fs.writeFile("data.txt", new_data, function (err) {
        if (err) {
          return console.log("Error writing file: " + err);
        }else{
          if(user_removed==true){
            res.json({"result":"success","status":200,"msg":"User deleted"});  
          }else{
            res.json({"result":"failure","status":200,"msg":"User ID not found"});  
          }
        }
      });
    });
  });
}

module.exports.init = init;