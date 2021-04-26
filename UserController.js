var UserModel = require('./model.js').userModel;

exports.getAllUsers = function (req, res) {
    var responseObj = new Object();
    responseObj.result = false;
    UserModel.find(function (err, users) {
        if (err) {
            responseObj.error = err;
        } else {
            responseObj.result = true;
            responseObj.users = users;
        }
        res.send(responseObj);
    });
}

// you need to call

exports.getUserById = function (req, res) {
    var responseObj = new Object();
    responseObj.result = false;
    var id = req.params.id;
    var searchQuery = { '_id': id }; //format for search query
    UserModel.findOne(searchQuery, function (err, user) {
        if (err) {
            responseObj.error = err;
        } else {
            responseObj.result = true;
            responseObj.user = user;
        }
        res.send(responseObj);
    });
}
exports.addUser = function (req, res) {
    var responseObj = new Object();
    responseObj.result = false;
    //In Post request, we can retrieve data by req.body object.
    var userModelObj = new UserModel();
    userModelObj.emailId = req.body.emailId;
    userModelObj.firstName = req.body.firstName;
    userModelObj.lastName = req.body.lastName;
    userModelObj.password = req.body.password;
    userModelObj.save(function (err) {
        if (err) {
            responseObj.error = err;
        } else {
            responseObj.result = true;
        }
        res.send(responseObj);
    });
}

exports.updateUser = function (req, res) {
    var responseObj = new Object();
    responseObj.result = false;
    var id = req.params.id;
    var searchQuery = { '_id': id }; //format for search query
    UserModel.findOne(searchQuery, function (err, user) {
        if (err || user == null) {
            responseObj.error = err;
            res.send(responseObj);
        } else {
            user.emailId = req.body.emailId;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.password = req.body.password;
            user.save(function (err) {
                if (err) {
                    responseObj.error = err;
                } else {
                    responseObj.result = true;
                }
                res.send(responseObj);
            });
        }
    });
}

exports.deleteUserById = function (req, res) {
    var responseObj = new Object();
    responseObj.result = false;
    var id = req.params.id;
    var searchQuery = { '_id': id }; //format for search query
    UserModel.remove(searchQuery, function (err) {
        if (err) {
            responseObj.error = err;
        } else {
            responseObj.result = true;
        }
        res.send(responseObj);
    });
}