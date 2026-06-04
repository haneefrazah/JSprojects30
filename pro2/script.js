const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

btn.addEventListener("click", getjoke);

function getjoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      joke.innerText = data.joke;
    })
    .catch(err => {
      joke.innerText = "Failed to load joke 😢";
      console.log(err);
    });
}