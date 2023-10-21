const arr = [
  {
    id: 1,
    name: "juan",
    age: "23",
  },
  {
    id: 2,
    name: "pedro",
    age: "43",
  },
  {
    id: 3,
    name: "maria",
    age: "12",
  },
];



function check(req, res) {
  var { params } = req.params;
  console.log(params);
  filteredAray = arr.filter((item) => {
    return item.id !== parseInt(params);
  });

  return res.json({
    result: filteredAray,
  });
}

function postMessage(req, res) {
  var body = req.body;

  return res.json({
    mesage: body.message,
  });
}

function insertUser(reg,res){
  let body = req.body
  const {username,password,email}=body
  try {
    const user=DBModel.createUsers({
      username: username,
      password:password,
      email:email
    })

    res.json({
      user: user,
      result: body,
      message: "successful"
    })
  }catch(error){
    res.json({
      errorMessage: error
    })
  }
}

exports.check = check;
exports.postMessage = postMessage;
