let userName= document.getElementById("username1");
let userEmail= document.getElementById("email2");
let userPassword=document.getElementById("password2")

let objct={
    userName :"",
    userEmail:"",
    userPassword:""
}

let storageData=JSON.parse(localStorage.getItem("Datas")) || [];

let myFun = () => {
objct.userName= userName.value;
objct.userEmail=userEmail.value;
objct.userPassword=userPassword.value;

storageData.push(objct);
localStorage.setItem("Datas", JSON.stringify(storageData))

}


let pass=document.getElementById("password");
let userData=JSON.parse(localStorage.getItem("Datas"));
function myFun2(){
  
    let passKey=userData.find((Data) => {
        return Data.userPassword == pass.value;
    });
    if(passKey){
        alert("user Found")
    }else{
        alert("User Not Found")
    }
    
}




