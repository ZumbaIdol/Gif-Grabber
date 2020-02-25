class Gif {
    constructor(gifJSON) {
        this.id = gifJSON.id
        this.body = gifJSON.name
        this.user_id = gifJSON.user_id
    }

    renderLi(){
        return `<li data-id=${this.id}>${this.name}<a class="delete-gif-link">Delete</a></li>`
    }
}