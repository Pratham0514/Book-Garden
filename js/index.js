    function submitSignup() {
      var name = document.getElementById("fullname").value;
      window.location.href = "code/home.html?name=" + encodeURIComponent(name);
      return false;
    }