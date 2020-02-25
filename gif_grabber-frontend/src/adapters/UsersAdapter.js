class UsersAdapter {
    constructor() {
        this.userUrl = ('https//localhost:3000/users')
    }

    loginUser(value) {
        const user = {
            name: value
        }
        return fetch(`${this.userUrl}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({ user })
        }).then(response => response.json())
    }
}