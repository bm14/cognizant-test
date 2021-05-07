const URL = "https://api.chucknorris.io/jokes/random?category=history";

const fetchData = async() => {

    const response = await fetch(URL);
    const data = await response.json();
    const joke = data.value;
    console.log(joke);
    
    return joke

}
export default fetchData