const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = 'https://api.quotable.io/random';

async function getQuotes(url){
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuotes(api_url)

function twitter(){
    window.open(href="https://twitter.com/intent/tweet?text=" + quote.innerHTML, "Tweet Window", "width=600", "height=300")
}