const mongoose = require('mongoose');

function connect(){
    mongoose.connect("mongodb://127.0.0.1:27017/self")
    .then(()=>{
        console.log("data base connected");
        
    })
    .catch((err)=>{
        console.log('something went wrong');
        
    })
}

module.exports = connect