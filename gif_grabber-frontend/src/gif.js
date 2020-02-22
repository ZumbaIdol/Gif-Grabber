class Gif {
    constructor() {
        this.gifUrl = ('https://api.giphy.com/v1/gifs/search?api_key=7x3PQolnMLSyWjEZZbWtov3SGXRutNak&q=excited&limit=25&offset=0&rating=G&lang=en')
    }

    getGifs() {
        return fetch(this.gifUrl).then(response => response.json())
    }

    createGif(category, id) {
        category: value
        user_id: id 
    }
}

// const urlSearch = 'https://api.giphy.com/v1/gifs/search?api_key=7x3PQolnMLSyWjEZZbWtov3SGXRutNak&q=excited&limit=25&offset=0&rating=G&lang=en'

// const urlTrend = 'https://api.giphy.com/v1/gifs/trending?api_key=7x3PQolnMLSyWjEZZbWtov3SGXRutNak&limit=25&rating=G'


    