   const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    document.getElementById("welcomeText").innerText = "Welcome " + name;
    document.getElementById("welcome-msg").innerHTML = "Start Your reading journey today&nbsp" + name;

    const imgarray = [
      "./../img/img1 (1).jpg",
      "./../img/img2.jpg",
      "./../img/img3.jpg",
      "./../img/img4.jpg"
    ];
    let imgindex = 0;
    const imgmove = document.getElementById("img");

    function back() {
      imgindex = (imgindex === 0) ? imgarray.length - 1 : imgindex - 1;
      imgmove.src = imgarray[imgindex];
    }

    function next() {
      imgindex = (imgindex === imgarray.length - 1) ? 0 : imgindex + 1;
      imgmove.src = imgarray[imgindex];
    }