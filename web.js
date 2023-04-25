"use strict";

//모듈
const express =require('express')
const app = express();
const home = require('./routes/home') //index.js을 읽음


//웹 세팅
app.set('views','./views')
app.set('view engine','ejs')

app.use('/',home)
 //use -> 미들웨어를 등록해주는 메서드
app.use('/login',home)

module.exports = app