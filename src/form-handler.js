function process_get(req) {
    // Prepare output in JSON format
    var response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    return JSON.stringify(response);
}

function process_post(req) {
    // Prepare output in JSON format
    var response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
     };
     console.log(response);
    return JSON.stringify(response);
}

exports.process_get = process_get
exports.process_post = process_post