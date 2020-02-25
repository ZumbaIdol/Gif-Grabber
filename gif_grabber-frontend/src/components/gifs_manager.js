class GifsManager {
    constructor() {
        this.gifs = []
        this.adapter = new GifsAdapter()
        this.userAdapter = new UsersAdapter()

        this.initBindingsAndEventListeners()
        this.fetchAndLoadGifs()
    }
}