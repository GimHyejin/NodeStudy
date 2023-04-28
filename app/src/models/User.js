"use strict";
const UserStorage = require('./UserStorag')
class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const {id,psword} = await UserStorage.getUserInfo(this.body.id)//내가 저장된 데이터가 가지고 있는 데이터
        if(id){
            if(id === this.body.id && psword === this.body.psword){
                return {success:true}
            }
            return {success:false,msg:"비밀번호가 없습니다."}
        }
        return {success:false,msg:"존재하지 않는 아이디입니다."}

    }
    async register (){
        try{
            const response = await UserStorage.save(this.body)
            return response
        }catch(err){
            return{success:false , msg:err}
        }

    }
}

module.exports = User;