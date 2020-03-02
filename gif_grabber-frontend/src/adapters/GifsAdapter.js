class GifsAdapter {
    constructor() {
        this.baseUrl = ('https://giphy.com/embed/xTiN0CNHgoRf1Ha7CM?api_key=7x3PQolnMLSyWjEZZbWtov3SGXRutNak&q=excited&limit=25&offset=0&rating=G&lang=en')
        }

        // getGifs() {
        //     return fetch(this.baseUrl).then(response => response.json())
        // } This method is causing cors error, tried combining methods below, caused a different error

        getAndCreateGif(value, id) {
            const gif = {
                name: value,
                user_id: id
            }
            return fetch(this.baseUrl, { // causing a 403 forbidden error
                method: 'POST',
                mode: 'no-cors',
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