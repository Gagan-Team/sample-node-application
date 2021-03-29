const { response } = require("express");
var fs = require("fs");


function upload(req) {
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    var file = __dirname + "/" + req.files.file.name;
    var path = req.files.file.path;

    fs.readFile(path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File Uploaded Successfully !',
                    filename: req.files.file.name
                }
            }
            console.log(response);
        });
    });
    return response;
}

exports.upload = upload