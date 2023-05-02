"use strict";

const app = require(`../web`);
const post = process.env.PORT || 3000;
const logger = require('../src/config/logger')

app.listen(post,()=>{
    logger.info(`${post}포트에 접속하였습니다.`)
})
