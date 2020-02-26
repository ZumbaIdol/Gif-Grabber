class App {
    constructor() {
        this.gifs = new GifsManager()
        this.clearStorage()
    }

    clearStorage() {
        localStorage.clear()
    }
}