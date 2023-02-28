const apikey = 'live_6qyIZw2ADmbJgF9aWeSeflTe8tRp2TQ7Utk3oH5o5kwrSer8Whp2uM1jkwwXSbFI';
const imgCat = document.querySelector('.img-cats');
const botaoCat = document.querySelector('.botaoCat')

console.log(imgCat)
async function getCat(e) {
  

    const url = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${apikey}`;
    const response = await fetch(url);
    
    const json = await response.json();

    console.log(json);
    console.log(json[0].url);

    imgCat.setAttribute("src", `${json[0].url}`);

    console.log(imgCat)
}

botaoCat.addEventListener('click', getCat);
