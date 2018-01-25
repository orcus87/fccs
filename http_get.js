var http = require("http")
var bl = require("bl")
var url = process.argv[2]
var output =''
http.get(url, function(response) {
    response.pipe(bl(function (err,data){
        if (err) console.error("error")
        output = data.toString()
        console.log(output.length)
        console.log(output)
    })
    )
})