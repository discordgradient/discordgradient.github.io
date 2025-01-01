function pluralize(word, amount) {
    if (amount == 1) {
        return word;
    }
    return word + "s";
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