const topUp = document.querySelector(".top_up");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        topUp.classList.add("active");
    } else {
        topUp.classList.remove("active");
    }
 }
)