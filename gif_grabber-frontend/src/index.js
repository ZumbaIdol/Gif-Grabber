/////////////////////////////////////////////////////////////////
////////////////////////DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
//////////////////////////////
//////////////Invoke GET fetch
fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => {
        users.forEach(user=> {
            const { id, name } = user
            new User(id, name)
        })
    })

fetch('http://localhost:3000/gifs')
    .then(resp => resp.json())
    .then(gifs => {
        gifs.forEach(gif => {
            const { id, name } = gif
            new Gif(id, name)
        })

        fetch('https://api.giphy.com/v1/gifs/search?api_key=7x3PQolnMLSyWjEZZbWtov3SGXRutNak&q=excited&limit=25&offset=0&rating=G&lang=en')
      .then(response => response.json())
      .then(gifs => {
        gifs.forEach(gif => {
            const { id, name } = gif
            new Gif(id, name)
        })
    
    })
    // function logSubmit(e) {
    //     log.textContent = `Form Submitted! Time stamp: ${e.timeStamp}`;
    //     e.preventDefault();
    //   }
      
    //   const form = document.getElementById('form');
    //   const log = document.getElementById('log');
    //   form.addEventListener('submit', logSubmit);
    })
})
