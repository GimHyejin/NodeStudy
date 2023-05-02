
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
        if(response.err) 
            logger.error(`Post/login 200 Response :Success ${response.success} ${response.error}`)
        else 
            logger.info(`Post/login 200 Response :Success ${response.success} Msg:${response.msg}`)
        return res.json(response)
    },
    register: async (req, res) => {
        const userData = new User(req.body);
        const response = await userData.register();
        if(response.err) 
            logger.error(`Post/login 200 Response :Success ${response.success} ${response.error}`)
        else 
            logger.info(`Post/login 200 Response :Success ${response.success} Msg:${response.msg}`)
    
        return res.json(response)
    }
}
module.exports = {
    output,
    resultData
};