1. ## window.location.href    
                            .This is used to change or get the current page URL.
                            .                                                       synatx= window.location.href = "somepage.html";
                            .navigates the browser to that page — like clicking a link.

2. ## encodeURIComponent(name) 
                            .This ensures the name is safe for URLs.
                            .If you don’t encode it, spaces or special characters can break the URL
                                                                             eg=window.location.href = "code/home.html?name=Prathamesh%20Roundale";
 
3. ## window.location.search   
                            .This gives you everything after the ? in the URL.
                                                                            Example:If the URL is:
                                                                                    home.html?name=Prathamesh

4. ## URLSearchParams(...)     
                            .It's a built-in JavaScript object that helps you work with URL query parameters easily.
                            .It turns the search string into an object you can query.
                                                                                 eg= const params = new URLSearchParams(window.location.search);
                                                                                     const name = params.get("name");

    # ( use in index page and  home page )

/```
    function submitSignup() {
       var name = document.getElementById("fullname").value;                                        <- index
      window.location.href = "code/home.html?name=" + encodeURIComponent(name);
      return false; 
    } ```/

/```  const params = new URLSearchParams(window.location.search);
    const name = params.get("name");                                                                  <- home
    document.getElementById("welcomeText").innerText = "Welcome " + name;
    ```/