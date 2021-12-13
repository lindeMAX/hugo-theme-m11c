window.onload = function () {
    
    const hamburger = document.getElementById("hamburger");
    const fadeshow = document.getElementById("fadeshow");

    // Display header if is checked -> This is so on the home page
    if (hamburger.checked) {
        fadeshow.style.display = "block";
    }
    else {
        fadeshow.style.display = "none";
    }
    
    hamburger.onclick = function () {
        this.classList.toggle("checked");
        if (hamburger.checked) {
            fadeshow.style.display = "block";
        }
        else {
            fadeshow.style.display = "none";
        }
    }

    var items = document.body.getElementsByTagName("*");
    for (var i = 0, len = items.length; i < len; i++) {
        // do something with items[i] here
        console.log(items[i]);
    }

    // Apply color theme
    function setTheme(oldTheme, newTheme) {
        const body = document.getElementsByTagName("body");
        // Remove old theme scope from body's class list
        body.classList.remove(oldTheme);
        // Add new theme scope to body's class list
        body.classList.add(newTheme);
        // Set it as current theme
        currentTheme = newTheme;
    }

    const themeSelector = document.getElementById("theme-selector");
    
    // Set to default theme on load
    let currentTheme = "dark-theme";
    body.classList.add(currentTheme);

    // Add change event listener
    themeSelector.addEventListener("change", function (e) {
        // Get the user's choice from the event object `e`.
        const newTheme = e.currentTarget.value;
        // Set the theme
        setTheme(currentTheme, newTheme);
    });
};