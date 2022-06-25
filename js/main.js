document.getElementById("new-signup").addEventListener("click", () => {
  document.getElementById("SingIn").style.display = "none";
  document.getElementById("SingUp").style.display = "";
});

document.getElementById("signup-button").addEventListener("click", () => {
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  let UserData = {
    username: userName,
    email: email,
    password: password,
  };

  console.log(userName);
  if (userName == "" || password == "" || email == "") {
    alert("Please enter data");
  } else {
    let Users = JSON.parse(localStorage.getItem("Users"));
    if (Users == null) {
      let NewArray = [UserData];
      localStorage.setItem("Users", JSON.stringify(NewArray));
    } else {
      Users.push(UserData);
      localStorage.setItem("Users", JSON.stringify(Users));
    }
    document.getElementById("SingIn").style.display = "";
    document.getElementById("SingUp").style.display = "none";
  }
});

document.getElementById("login-button").addEventListener("click", () => {
  email = document.getElementById("loginEmail").value;
  password = document.getElementById("loginPassword").value;

  let Users = JSON.parse(localStorage.getItem("Users"));

  let user = Users.find(
    (user) => user.email == email && user.password == password
  );

  if (user != undefined) {
    document.getElementById("index").style.display = "";
    document.getElementById("SingIn").style.display = "none";
  } else {
    alert("Please enter correct data");
  }
});
