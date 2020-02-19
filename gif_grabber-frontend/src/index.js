//import { response } from "express"

// const BACKEND_URL = "https://localhost:3000"
// fetch(`${BACKEND_URL}/test`)
// .then(response => response.json())
// .then(parsedResponse => console.log(parsedResponse))

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#gif-container")
    const gifSearch = document.querySelector("#gifName")
    const trendSearch = document.querySelector("#trendName")

    fetch(urlSearch)
        .then(response =>{
            return response.json()
        }) 
        .then(json => {
            container.innerHTML = gifArrayHTML(json)
        })
})

