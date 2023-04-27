
"use strict";
const User = require('../../models/User')
//로딩
const output={
    home:(req,res)=>{
        res.render('home/index')    
    },
    login : (req,res)=>{
        res.render('home/login')    
    },
    register : (req,res)=>{
        res.render('home/register')    
    }
}
//값을 가져오기
const resultData = {
    login:(req,res)=>{
        const userData = new User(req.body);
        const response = userData.login();
        return res.json(response)
    },
    register:(req,res)=>{
        const userData = new User(req.body);
        const response = userData.register();
        return res.json(response)
    }
}
module.exports = {
    output,
    resultData
};