const app = require('./src/app')
const connect  = require('./src/db/db')
connect()




app.listen(3000,function(){
    console.log("server is running on 3000 port");
    
})