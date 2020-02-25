class App {
    constructor() {
        this.gifs = new Gifs()
        this.clearStorage()
    }

    clearStorage() {
        localStorage.clear()
    }
}