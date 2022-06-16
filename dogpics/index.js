
let url = "https://dog.ceo/api/breeds/image/random";
let image = document.querySelector('img');
let btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    fetch(url)
    .then(res => res.json())
    .then( data => {
        image.src = data.message;
    })
})



