const DBModel = require("../lib/DBModel");

// function check(req, res) {
//   var { params } = req.params;
//   console.log(params);
//   filteredAray = arr.filter((item) => {
//     return item.id !== parseInt(params);
//   });

//   return res.json({
//     result: filteredAray,
//   });
// }

// function postMessage(req, res) {
//   var body = req.body;

//   return res.json({
//     mesage: body.message,
//   });
// }

function createUser(req, res) {
  try {
    const user = DBModel.createUsers({
      username: req.body.username,
      email: req.body.email,
    });
    console.log("TEST", user);
    res.json({
      user: req.body,
    });
  } catch (error) {
    res.json({
      message: "errro",
    });
  }
}

// exports.check = check;
// exports.postMessage = postMessage;
exports.createUser = createUser;
