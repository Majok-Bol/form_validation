console.log("It is working!");
const nameInput=document.getElementById("name");
const password=document.getElementById("password");
const form=document.getElementById("form");
const errorElement=document.getElementById("error");
form.addEventListener("submit",(e)=>{
 //store error messages
    let messages=[];
    if(nameInput.value===""||nameInput.value==null){
        messages.push("Name is required");
         e.preventDefault();
    }
    //check password length
    if(password.value.length<=6){
        messages.push("Password must be longer than 6 characters ");
    }
     if(password.value.length>=20){

    }
    if(password.value.toLowerCase()==="password"){
        messages.push("password cannot be password");
   
    }
    //if there are errors
    //prevent default behaviour of submitting the form to the server
     if(messages.length>0){
         e.preventDefault();
        errorElement.innerText=messages.join(",");
        errorElement.style.color="red";
  
     }

})