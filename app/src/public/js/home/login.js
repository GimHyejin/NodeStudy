"use strict";

const loginBtn = document.querySelector("button");

// if (loginBtn) {
//     loginBtn.addEventListener("onclick", login);
// }

function login() {
    const id = document.querySelector('#id'),
        psword = document.querySelector("#pw");

    const req = {
        id: id.value,
        psword: psword.value
    }


    fetch('/login', {
        method: "POST", //RESTFul:API
        headers: { //전달하는 데이터:JSON임을 표시
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
        //stringify :Object를 문자열로 
    })
    .then((res)=> res.json())
    .then((res)=>{
        if(res.success){
            location.href='/'
        }else{
            alert(res.msg)
             
        }
    })
    .catch((err)=>{
        console.log("로그인 오류 발생")
    })
    



}
