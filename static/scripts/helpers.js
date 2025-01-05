function pluralize(word, amount) {
    if (amount == 1) {
        return word;
    }
    return word + "s";
}


function titleCase(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}


function hexToRgb(hex, opacity) {
    hex = hex.replace("#", "");
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    if (!opacity) {
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
}


function setAccordions() {
    var accButton = document.getElementsByClassName("accordion-button");
    var i;

    for (i = 0; i < accButton.length; i++) {
        accButton[i].addEventListener("click", event => {
            var element = event.target;
            element.classList.toggle("accordion-active");

            var accPanel = element.nextElementSibling;
            if (accPanel.style.maxHeight) {
                accPanel.style.transition = null;
                accPanel.style.maxHeight = null;
                element.style.borderRadius = "10px";
            } else {
                accPanel.style.transition = "max-height 0.2s ease-out";
                accPanel.style.maxHeight = accPanel.scrollHeight + "px";
                element.style.borderRadius = "10px 10px 0 0";
            }
        });
    }
}


function handleAnchors() {
    window.addEventListener("hashchange", () => {
        history.replaceState(null, null, window.location.pathname);
    });
}


function setNavDropdown() {
    var navDropdownArea = document.getElementById("top-nav-dropdown");
    var navContent = document.getElementById("top-nav-dropdown-content");

    navDropdownArea.addEventListener("click", event => {
        event.stopPropagation();

        if (navContent.style.display) {
            navContent.style.display = null;
            navDropdownArea.classList.remove("nav-active");
        } else {
            navContent.style.display = "inline-block";
            navDropdownArea.classList.add("nav-active");

            if (window.innerWidth > 650) {
                navContent.style.position = "absolute";
                navContent.style.float = null;
                navContent.style.right = "40px";
                navContent.style.zIndex = "1";
            } else {
                navContent.style.position = "relative";
                navContent.style.float = "right";
                navContent.style.right = null;
                navContent.style.zIndex = null;
            }
        }
    });

    document.addEventListener("click", () => {
        if (navContent.style.display) {
            navContent.style.display = null;
            navDropdownArea.classList.remove("nav-active");
        }
    });


    var navMobile = document.getElementById("top-nav-mobile");
    var navUl = document.getElementById("top-nav-list");

    if (navMobile) {
        navMobile.addEventListener("click", () => {
            if (!navUl.classList.contains("top-nav-mobile-active")) {
                navUl.classList.add("top-nav-mobile-active");
            } else {
                navUl.classList.remove("top-nav-mobile-active");
            }
        });
    }
}