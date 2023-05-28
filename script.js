

setInterval(function(){
    const pass1=document.querySelector("#pass");
    const pass2=document.querySelector("#conf");
    const confirm=document.querySelector("#confirm");
    if(pass1.value==pass2.value && pass1.value!="" && pass1.value.length>=8){
        confirm.innerText="Looks Good";
        confirm.setAttribute("style","color:green");
    }
    else if(pass2.value==""){
        confirm.innerText="";
    }
    else{
        confirm.innerText="*Passwords doesn't match";
        confirm.setAttribute("style","color:red");
    }
    },1000);


