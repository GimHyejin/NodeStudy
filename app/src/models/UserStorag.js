"use strict";
// const fs = require('fs');
// const util = require('util');

const db = require("../config/db")

class UserStorage {
    // static #staticGetUserInfo(data, id) {
    //     const users = JSON.parse(data);

    //     //id가 들어오면 id가 해당하는 값의 데이터를 반환(id,psword)
    //     const idx = users.id.indexOf(id);
    //     const usersKeys = Object.keys(users); //id,psword,name

    //     const userInfo = usersKeys.reduce((newUser, info) => {
    //         newUser[info] = users[info][idx]
    //         //id가 해당되는 값 :ex)id="woorimIt" psword=1111 name="우리밋"
    //         return newUser
    //     }, {})
    //     return userInfo
    // }
    // static #staticGetData(isAll, data, ...fields) {
    //     const users = JSON.parse(data)
    //     if (isAll) return users

    //     const newUsers = fields.reduce((newUsers, field) => {
    //         //newUsers란 배열에 fields의 값이 하나씩 들어감 초기값{}
    //         //reqduce:
    //         if (users.hasOwnProperty(field)) {
    //             newUsers[field] = users[field]
    //             //newUsers :{id:(id의 필드값),psword:(psword의 필드값)}
    //         }
    //         return newUsers
    //     }, {});//newUser의 초기값:{}
    //     return newUsers;
    // }

    static getData(isAll, ...fields) {
        // return util.promisify(fs.readFile)("./src/databases/users.json", "utf8")
        //     /**util.promisify() 함수를 사용하여 fs.readFile() 함수를 프로미스로 변환하면, 콜백 함수 대신 프로미스를 반환하게 됩니다 */
        //     .then((data) => {
        //         return this.#staticGetData(isAll, data, fields)
        //     })
        //     .catch((err) => { console.error(err) });
    }

    static getUserInfo(id) {
        return new Promise((resolve,reject)=>{
            const query = "SELECT * FROM users WHERE id=?;"
            db.query(query,[id],(err,data)=>{

                if(err) reject(err)
                else resolve(data[0]);
            })
        })
    }


        // return util.promisify(fs.readFile)("./src/databases/users.json", "utf8")
        //     /**util.promisify() 함수를 사용하여 fs.readFile() 함수를 프로미스로 변환하면, 콜백 함수 대신 프로미스를 반환하게 됩니다 */
        //     .then((data) => {
        //         return this.#staticGetUserInfo(data, id)
        //     })
        //     .catch((err) => { console.error(err) });


    static async save(userInfo) {
        return new Promise((resolve,reject)=>{
            const query = "INSERT INTO users(id,name,psword) VALUES(?,?,?); "
            db.query(query,[userInfo.id,userInfo.name,userInfo.psword],(err,data)=>{
                if(err) reject(err)
                else resolve({success:true});
            })
        })
    }
        // const users = await this.getData(true)
        // if (users.id.includes(userInfo.id)) {
        //     throw "이미 존재하는 아이디 입니다."
        // }
        // users.id.push(userInfo.id)
        // users.name.push(userInfo.name)
        // users.psword.push(userInfo.psword)
        // util.promisify(fs.writeFile)('./src/databases/users.json', JSON.stringify(users), "utf8")
        // return { success: true }
}
module.exports = UserStorage;
