const userModel = require('../models/user')
let bcrypt = require('bcrypt')

module.exports.indexController = function(req,res){
    res.render("home")
    
}

module.exports.createUser =async function(req,res){
    const {name,email,password,url} = req.body
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(password,salt,async function(err,hash){
            let user =await userModel.create({
                name,
                email,
                password: hash,
                url,
            })
            res.redirect('/read')
        })
    })
    
    
}

module.exports.readUser =async function(req,res){
    let user =await userModel.find()
    res.render("read",{user})
}
module.exports.edituser = async function(req,res){
    let user = await userModel.findOne({_id:req.params.userid});
    res.render('edit',{user})
}

module.exports.updateuser = async function(req,res){
    let {url,name,email,password} = req.body
    let user = await userModel.findOneAndUpdate({_id:req.params.userid},{url,name,email,password},{new:true});
    res.redirect('/read');
}


module.exports.deleteuser = async function(req,res){
    let user = await userModel.findOneAndDelete({_id:req.params.userid});
    res.redirect('/read');
}




