class GifsManager {
    constructor() {
        this.baseUrl = ('https://giphy.com/embed/xTiN0CNHgoRf1Ha7CM?api_key=7x3PQolnMLSyWjEZZbWtov3SGXRutNak&q=excited&limit=25&offset=0&rating=G&lang=en')
    }

    getGifs() {
        return fetch(this.baseUrl).then(response => response.json())
    }

    createGif(value, id) {
        name: value
        user_id: id 
    }

    likeToggle(e) {
        console.log("like")
    }

    render() {
        const gifContainer = document.getElementById('gif-container')
        const gifCard = document.createElement('div')
        const liked = this.liked ? 'liked' : ''
        gifCard.classList.add('gif-card')
        gifCard.id = this.id
        gifCard.innerHTML = `
            <h2>${this.name}</h2>
            <p>Liked: <button id='heart' >❤️</button> /></p>
            <button data-id="${this.id}" class="delete">DELETE GIF? :-(</button>
        `
        gifContainer.appendChild(gifCard)
        gifCard.addEventListener('click', e => {
            if (e.target.className === 'delete')this.delete(e)
            if (e.target.className === 'toggle') this.likeToggle(e)
    
        })
    }
    
    updateGif(value, id) {
        const gif = {
            name: value
        }
        return fetch(this.baseUrl + `/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ gif})
        })
        .then(res => res.json())
        
    }

    deleteGif(id) {
        return fetch(this.baseUrl + `/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    }
}



    