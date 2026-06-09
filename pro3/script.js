const next = document.querySelector(".next");
const imgCont = document.querySelector(".imgCont")
const prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
    currImg--;
    updateImg();
})
let currImg = 1
next.addEventListener("click", () => {
    currImg++;
    updateImg();
})
function updateImg() {
    if (currImg > 4) {
        currImg = 1;
    } else if (currImg < 1) {
        currImg = 4;
    }
    imgCont.style.transform = `translateX(-${(currImg - 1) * 500}px)`
    setTimeout(() => {
        currImg++
        updateImg()
    }, 5000)
}