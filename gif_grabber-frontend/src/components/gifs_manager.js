// class GifsManager {
//     constructor() {
//         this.gifs = []
//         this.adapter = new GifsAdapter()
//         this.userAdapter = new UsersAdapter()

//         this.initBindingsAndEventListeners()
//         this.fetchAndLoadGifs()
//     }

//     initBindingsAndEventListeners() {
//         this.loginForm = document.getElementById('login-form')
//         this.newUserInput = document.querySelector('#new-user')
//         // debugger
//         this.loginForm.addEventListener('submit', this.loginUser.bind(this))

//         this.gifsContainer = document.getElementById('gifs-container')
//         this.name = document.querySelector('#gifName')
//         this.gifForm = document.getElementById('gif-form')
//         this.gifForm.addEventListener('submit', this.createGif.bind(this))
//         this.gifsContainer.addEventListener('dblclick', this.handleGifClick.bind(this))
//         this.name.addEventListener('blur', this.updateGif.bind(this), true)
//     }

//     createGif(e) {
//         e.preventDefault()
//         const current_user = localStorage.getItem('currentUser')
//         const value = this.gifName.value;
//         this.adapter.createGif(value, current_user).then(gif => {
//            this.gifs.push(new Gif(gif))
//            this.gifName.value = ''
//            this.render()
//         })
//     }

//     handleGifClick(e) {
//         if (e.target.classList.contains('delete-gif-link')){
//             console.log('will delete', e.target.parentNode);
//             this.deleteGif(e)
//         } else {
//             this.toggleGif(e)
//         }
//     }

//     toggleGif(e) {
//         const li = e.target
//         li.contentEditable = "true"
//         li.focus()
//         li.classList.add('editable')
//     }

//     updateGif(e) {
//         const li = e.target
//         li.contentEditable = "false"
//         li.classList.remove('editable')
//         const newValue = li.innerHTML
//         const id = li.dataset.id
//         if (id) {
//             this.adapter.updateGif(newValue, id)
//         }
//     }

//     deleteGif(e) {
//         const li = e.target.parentNode
//         const id = li.dataset.id
//         this.adapter.deleteGif(id)
//         li.remove()
//     }

//     fetchAndLoadGifs() {
//         this.adapter
//         .getGifs()
//         .then(() => {
//             this.render()
//         })
//     }

//     render() {
//         const current_user = localStorage.getItem('currentUser')
//         if (current_user) {
//             this.gifsContainer.innerHTML = `${this.gifs.filter(gif => gif.user_id == current_user).map(gif => gif.renderLi()).join('')}`
//         } else {
//             this.gifsContainer.innerHTML = 'Please login!'
//         }
//     }

//     loginUser(e) {
//         e.preventDefault()
//         console.log('e.target: ', e.target.childNodes[3].value);
//         const btn = e.target.childNodes[3]
//         const btnText = e.target.childNodes[3].value
//         if (btnText == 'Login') {
//             const value = this.newUserInput.value
//             this.userAdapter.loginUser(value)
//                 .then(user => {
//                     localStorage.setItem('currentUser', parseInt(user.id))
//                     console.log(`currentUser ${user.name} set with id: ${localStorage.getItem('currentUser')}`);
//                 })
//                 .then(() => this.render())
//             this.newUserInput.value = ""
//             btn.setAttribute('value', 'Logout')
//         } else {
//             localStorage.clear()
//             location.reload()
//             btn.setAttribute('value', 'Login')
//         } 
//     }
// }




// Render trainers & their pokemon
// function renderTrainers(trainer) {
//     const trainerContainer = document.getElementById("main-container");
//     trainerContainer.insertAdjacentHTML("beforeend",
//     `
//         <div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
//         <button class="new" data-id=${trainer.id}>Add Pokemon</button>
//         <ul id="trainer-${trainer.id}">
        
//         </ul>
//         </div>
//     `
//     );
//     const pokemonContainer = document.getElementById(`trainer-${trainer.id}`);
//     trainer.pokemons.forEach(pokemon => {pokemonContainer.insertAdjacentHTML("beforeend",
//     `
//         <li>${pokemon.nickname} (${pokemon.species}) 
//         <button class="release" data-id=${pokemon.id}>
//         Release</button></li>
//     `
//     );
//     });
// }


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

        loginUser(e) {
        e.preventDefault()
        console.log('e.target: ', e.target.childNodes[3].value);
        const btn = e.target.childNodes[3]
        const btnText = e.target.childNodes[3].value
        if (btnText == 'Login') {
            const value = this.newUserInput.value
            this.userAdapter.loginUser(value)
                .then(user => {
                    localStorage.setItem('currentUser', parseInt(user.id))
                    console.log(`currentUser ${user.name} set with id: ${localStorage.getItem('currentUser')}`);
                })
                .then(() => this.render())
            this.newUserInput.value = ""
            btn.setAttribute('value', 'Logout')
        } else {
            localStorage.clear()
            location.reload()
            btn.setAttribute('value', 'Login')
        } 
    }
}




    
