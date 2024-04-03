const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = 'https://api.quotable.io/quotes/random';

async function getRandQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    quote.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
}

getRandQuote(api_url)

function Twitter(){
    window.open(href="https://twitter.com/intent/tweet?text=" + quote.innerHTML, "Tweet Window", "width=600", "height=300")
}