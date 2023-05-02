
"use strict";
const logger = require('../../config/logger')
const User = require('../../models/User')
//로딩
const output = {
    home: (req, res) => {
        logger.info('GET/200으로 이동')
        res.render('home/index')
    },
    login: (req, res) => {
        logger.info('GET/login으로 이동')
        res.render('home/login')
    },
    register: (req, res) => {
        logger.info('GET/register으로 이동')
        res.render('home/register')
    }
}
//값을 가져오기
const resultData = {
    login: async (req, res) => {
        const userData = new User(req.body);
        const response = await userData.login();
        const url ={
            method: "POST",
            path:"/login",
            status: response.err ? 409 : 201,
        }
        log(response,url)
        return res.status(url.status).json(response)
    },
    register: async (req, res) => {
        const userData = new User(req.body);
        const response = await userData.register();
        const url ={
            method: "POST",
            path:"/register",
            status: response.err ? 409 : 201,
        }
        log(response,url)
        return res.status(url.status).json(response)
    }
}
function log(response,url){
    if(response.err)
        logger.error(
            `${url.method}/${url.path} ${url.status} Response :Success ${response.success} ${response.error}`
        )
    else 
        logger.info(
            `${url.method}/${url.path} ${url.status} Response :Success ${response.success} Msg:${response.msg || ""} `
        )
       
}
module.exports = {
    output,
    resultData
};