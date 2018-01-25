var fs = require('fs')
var path = process.argv[2];
var result = 0;
function countLines (callback) {
    fs.readFile(path,'utf-8', function(err,fileContent) {
        if (err) return console.error("error")
        result = fileContent.split("\n").length - 1;
        callback();
    })
}
function printResults(){
    console.log(result)
}

countLines(printResults);