"use strict";

//모듈
const express =require('express')
const app = express();
const home = require('./src/routes/home') //index.js을 읽음
const bodyParser = require('body-parser')

//웹 세팅  Express.js 애플리케이션이 뷰 파일(HTML, EJS 등)을 찾을 디렉토리를 지정하는 것입니다
app.set('views','./src/views')
app.set('view engine','ejs')

//정적파일 설정
app.use(express.static(`${__dirname}/src/public`))

//body-parser등록 
app.use(express.json())
//urlencoded를 통해 전달되는 데이터에 한글,공백등과 같은 
//문자가 올경우 인식 못하는 오류 해결
app.use(express.urlencoded({extended:true}))

//use -> 미들웨어를 등록해주는 메서드
app.use('/',home)
app.use('/login',home)
app.use('/register',home)


module.exports = app