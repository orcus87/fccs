var net = require('net')  

var server = net.createServer(function (socket) {  
       // socket handling logic 
       var date = new Date()
       var year = date.getFullYear().toString()
       var month = date.getMonth()
       if (month.toString().length==1){
         month = "0" + (month + 1)
       } else {
         month = month + 1
         month = month.toString()
       }
       var day = date.getDate()
       if (day.toString().length==1){
         day = "0" + day
       } else {
         day = day.toString()
       }
       
       var hour = date.getHours()
       if (hour.toString().length==1){
         hour = "0" + hour
       } else {
         hour = hour.toString()
       }
       
       var minutes = date.getMinutes()
       if (minutes.toString().length==1){
         minutes = "0" + minutes
       } else {
         minutes = minutes.toString()
       }
       var fulldate = year + "-" + month + "-" + day + " " + hour + ":" + minutes + "\n"
      // console.log(year + "-" + month + "-" + day + " " + hour + ":" + minutes)
       socket.end(fulldate)
})  

server.listen(process.argv[2])