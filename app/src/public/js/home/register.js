"use strict";

const registerBtn = document.querySelector("button");

function register() {
    const id = document.querySelector('#id'),
        name = document.querySelector('#name'),
        psword = document.querySelector("#pw"),
        pswordCheck = document.querySelector("#pwCheck");
    
    if(!id.value) return alert("아이디를 입력해주십시오")
    if(psword.value !== pswordCheck.value) return alert("비밀번호가 일치하지 않습니다.")
    
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        // pswordCheck: pswordCheck.value
    }

    fetch('/register', {
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
            location.href='/login'
        }else{
            if(res.err) return alert(res.err)
            alert(res.msg)
             
        }
    })
    .catch((err)=>{
        console.log("회원가입 오류 발생")
    })
    



}
