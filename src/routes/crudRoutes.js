function check(req, res) {
  var params = req.params;
  return res.json({
    mesage: params.params,
  });
}

function postMessage(req, res) {
  var body = req.body;

  return res.json({
    mesage: body.message,
  });
}
exports.check = check;
exports.postMessage = postMessage;
