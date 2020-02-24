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
        gifs.forEach(gif=> {
            const { id, name } = gif
            new Gif(id, name)
        })
    })

    function logSubmit(e) {
        log.textContent = `Form submitted! Timestamp: ${event.timeStamp}`
        e.preventDefault();
    }

    const form = document.getElementById('gif-form');
    const log =  document.getElementById('log');
    form.addEventListener('submit', logSubmit);
})