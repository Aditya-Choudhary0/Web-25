//Given stored username and password and input username and password, Print if the user can login or not.

let username = "Aditya654";
let password = "lkjhg321";
let entered_username = "Aditya654";
let entered_password = "lkjhg321";

if(username===entered_username){
  if(password===entered_password){
    console.log("Logged In");
  }else{
    console.log("Wrong Password");
  }
}else{
  console.log("Wrong Username");
}