let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = prompt("Enter your name here");
  password = prompt("enter your pass here");

  if (username === "myName" && password === "myPass") {
    loggedIn = true;
    alert("You are in!");
  } else {
    alert('Please try it again!');
  }
}
