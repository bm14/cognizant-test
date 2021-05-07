const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

const url = "https://api.chucknorris.io/jokes/random?category=travel";

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const joke = data.value;
        console.log(joke);
        return content.textContent = joke
    } catch (error) {
        console.log(error);

    }
}
btn.addEventListener("click", () => {
    getData(url);

})


