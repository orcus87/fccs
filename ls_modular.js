var lsmodule = require('./lsmodule')
var path = process.argv[2]
var ext = process.argv[3]

lsmodule(path,ext, function (err,list) {
    if (err) return console.log("error")
    
    for (var i in list) {
       console.log(list[i])
    }
})

