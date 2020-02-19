const urlSearch = 'https://api.giphy.com/v1/gifs/search?api_key=7x3PQolnMLSyWjEZZbWtov3SGXRutNak&q=excited&limit=25&offset=0&rating=G&lang=en'

const urlTrend = 'https://api.giphy.com/v1/gifs/trending?api_key=7x3PQolnMLSyWjEZZbWtov3SGXRutNak&limit=25&rating=G'

const gifHTML = (gifObj) => {
    return (`
        <div class="gif-card">
            <div class="gif-frame">
            <h1 class="center-text">${gifObj.name}</h1>
            </div>
        </div>`
    )}

    const gifArrayHTML = (gifArr) => {
        return gifArr.map(gif => gifHTML(gif)).join('')
    }

    