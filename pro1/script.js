const searchBox = document.getElementById("searchBox");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

btn.addEventListener("click", () => {
    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {
        input.focus();
    }
});

document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target)) {
        searchBox.classList.remove("active");
    }
});