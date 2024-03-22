  function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all the fields");
      return;
    }
    
    if (localStorage.getItem(username)) {
      alert("Username already exists");
      return;
    }
    
    localStorage.setItem(username, password);
    
    window.location.href = "prision_index.html";
    //alert("Registration successful!");
    
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }

  function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all the fields");
      return;
    }
    
    var storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
      window.location.href = "prision_index.html";
      //alert("Login successful");
    } else {
      alert("Invalid username or password");
    }
    
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
  }