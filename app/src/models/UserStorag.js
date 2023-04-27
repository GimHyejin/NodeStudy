"use strict";

class UserStorage{
    static #usersData = {
        id:["woorimIt","kokoa","apple"],
        psword:["1111","2222","3333"],
        name:["우리밋","카카오","사과"]
    }
    static getData(...fields){
        const users = this.#usersData
        const newUsers = fields.reduce((newUsers,field)=>{
            //newUsers란 배열에 fields의 값이 하나씩 들어감 초기값{}
            //reqduce:
            if(users.hasOwnProperty(field)){

                newUsers[field] = users[field]
                //newUsers :{id:(id의 필드값),psword:(psword의 필드값)}
            }
            return newUsers
        },{});//newUser의 초기값:{}
        return newUsers; 
    }

    static getUserInfo(id){
        //id가 들어오면 id가 해당하는 값의 데이터를 반환(id,psword)
        const users = this.#usersData;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //id,psword,name
        
        const userInfo = usersKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx] 
            //id가 해당되는 값 :ex)id="woorimIt" psword=1111 name="우리밋"
            return newUser           
        },{})
        return userInfo 
    }

    static save(){
    }


}
module.exports = UserStorage;
