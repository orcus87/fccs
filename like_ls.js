var fs = require('fs')
var path = process.argv[2]
var ext = process.argv[3]
var filteredList = []
fs.readdir(path, function (err,list) {
    if (err) return console.log(err)
    
    filteredList = list.filter(function (str){
        if (str.indexOf('.') >=0) {
            return str.substr(str.lastIndexOf('.')+1) == ext
        } else {
            return false
        }
    })
    for (var i in filteredList) {
        console.log(filteredList[i])
    }
})

