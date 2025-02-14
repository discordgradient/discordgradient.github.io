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

    document.addEventListener("click", event => {
        if (navContent.style.display) {
            navContent.style.display = null;
            navDropdownArea.classList.remove("nav-active");
        } else {
            if (navDropdownArea.contains(event.target)) {
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


function setSwitch(input, pages, displays) {
    var switchPos = 0;
    var inputElement = document.getElementById(input);
    var i, pageElements = [];

    for (i = 0; i < pages.length; i++) {
        pageElements.push(document.getElementById(pages[i]));
    }

    inputElement.addEventListener("click", () => {
        switchPos = (switchPos == 0) ? 1 : 0;

        pageElements[switchPos].style.display = displays[switchPos][0];
        pageElements[1 - switchPos].style.display = displays[1 - switchPos][1];
    });
}


function setSlideShow(prevId, nextId) {
    const slideImgs = [
        "static/get-started-images/1-1.webp", "static/get-started-images/1-2.webp", "static/get-started-images/1-3.webp", "static/get-started-images/1-4.webp",
        "static/get-started-images/2-1.webp", "static/get-started-images/2-2.webp", "static/get-started-images/2-3.webp", "static/get-started-images/2-4.webp",
    ];

    var slideIndex = 0, newSlideIndex;
    var slides = document.querySelectorAll(".slideshow-slide");
    var dotWrapper = document.getElementById("slideshow-dot-wrapper");
    var allDots = [];

    showSlide(slideIndex, null);

    document.getElementById(prevId).addEventListener("click", () => {
        newSlideIndex = slideIndex == 0 ? slides.length - 1 : slideIndex - 1;
        showSlide(newSlideIndex, slideIndex);
        slideIndex = newSlideIndex;
    });
    document.getElementById(nextId).addEventListener("click", () => {
        newSlideIndex = slideIndex == slides.length - 1 ? 0 : slideIndex + 1;
        showSlide(newSlideIndex, slideIndex);
        slideIndex = newSlideIndex;
    });

    function showSlide(curr, prev) {
        if (prev != null) {
            slides.item(prev).style.display = "none";

            renderSlide(slides.item(curr), curr);

            allDots[prev].classList.remove("slideshow-dot-active");
            allDots[curr].classList.add("slideshow-dot-active");
        } else {
            slides.forEach((slide, i) => {
                if (i == curr) {
                    renderSlide(slide, curr);
                } else {
                    slide.style.display = "none";
                }

                var slideDot = document.createElement("span");
                slideDot.classList.add("slideshow-dot");
                if (i == 0) slideDot.classList.add("slideshow-dot-active");

                allDots.push(slideDot);
                dotWrapper.appendChild(slideDot);
            });

            for (let dotIdx = 0; dotIdx < allDots.length; dotIdx++) {
                allDots[dotIdx].addEventListener("click", () => {
                    showSlide(dotIdx, slideIndex);
                    allDots[dotIdx].classList.add("slideshow-dot-active");
                    allDots[slideIndex].classList.remove("slideshow-dot-active");
                    slideIndex = dotIdx;
                });
            }
        }
    }

    function renderSlide(slide, imgIdx) {
        slide.style.display = "block";
        var slideImg = slide.querySelector("img");
        if (slideImg && !slideImg.hasAttribute("src")) {
            slideImg.setAttribute("src", slideImgs[imgIdx]);
        }
    }
}