const {createLogger,transports,format} = require('winston')
const {combine,printf,timestamp,label,json,simple,colorize} = format
const dotenv = require("dotenv")
dotenv.config();

const printLogFormat = {
    file:combine(
        label({
            label:"벡엔드 맛보기"
        }),
        timestamp({
            format:"YYYY-MM-DD HH:mm:dd"
        }),
        
        printf(({timestamp,label,level,message})=>{
            return `${timestamp} [${label}] ${level} : ${message}`
        })
    ),
    console: combine(
        colorize(),
        simple()
    )
}
const opts ={
    file: new transports.File({
        filename:"access.log",
        dirname:"./logs",
        level:"info",
        format:printLogFormat.file
    }),
    console: new transports.Console({
        level:"info",
        format:printLogFormat.console
    })
}
const logger = createLogger({
    transports:[opts.file]
})
if(process.env.NODE_ENV == "dev"){
    logger.add(opts.console)
}

logger.stream = {
    write:(message) => logger.info(message)
}


module.exports = logger