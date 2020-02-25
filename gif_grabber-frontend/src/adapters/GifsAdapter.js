import { response } from "express"

class GifsAdapter {
    constructor() {
        this.baseUrl = ('https//localhost:3000/gifs')
        }

        getGifs() {
            return fetch(this.baseUrl).then(response => response.json())
        }

        createGif(value, id) {
            const gif = {
                name: value,
                user_id: id
            }
            return fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
            }, 
            body: JSON.stringify({ gif })
        }).then(response => {
            return response
        }).then(response => response.json())
        .catch((message) => console.log(message))
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
        body: JSON.stringify({ gif })
        }).then(response => response.json())
    }

    deleteGif(id) {
        return fetch(this.baseurl + `/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    }
}