const nameInput = document.querySelector("#form-full-name");
const emailInput = document.querySelector("#form-email");
const messageInput = document.querySelector("#form-message");
const submitButton = document.querySelector("#submit-btn");
const userData = {
  fullName:"",email:"",message:""
}

// Fetch data from localstorage to UI
window.addEventListener("load", function(){
  const DATA = JSON.parse(localStorage.getItem("userData"));
  nameInput.value = DATA.fullName;
  emailInput.value = DATA.email;
  messageInput.value = DATA.message;
})

// Fetch data from UI to localstorage
submitButton.addEventListener("submit",function(){

})