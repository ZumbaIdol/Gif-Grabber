const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const GIFS_URL = `${BASE_URL}/gifs`


document.addEventListener('DOMContentLoaded', () => {
   fetchUsers()
})

function fetchUsers() {
    console.log('Loaded!')
    fetch(USERS_URL)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(users) {
        console.log(users)
    })
}
