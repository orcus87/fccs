var http = require("http")
var bl = require("bl")
var urls = []
var str = []
var result = []

function collectAll () {
    for (var i = 2; i<5;i++) {
        urls.push(process.argv[i])
    }
    
    var collectOne = function(index) {
        console.log("current index = " + index)

        if (index == urls.length) {
            console.log("done:")
        } else {
            
            http.get(urls[index], function(response) {
                response.pipe(bl(function (err,data){
                    if (err) console.error("error")
                    str.push(data.toString())
                    if (index == urls.length) {
                        console.log(str)
                    }
                })
                )

            })
            
            collectOne(index + 1)
            
            
        }
    }
    
    collectOne(0)
    
}

collectAll()