const BACKEND_URL = "https://localhost:3000";
const USERS_URL = `${BACKEND_URL}/users`;
const GIFS_URL = `${BACKEND_URL}/gifs`;
/////////////////////////////////////////////////////////////////
////////////////////////DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
//////////////////////////////
//////////////Invoke GET fetch
    fetchUsers();

////////////////////////////////////////////////////////////////
////////////GET fetch for Users
function fetchUsers() {
    fetch("USERS_URL")
    .then(response => response.json()) 
    .then(data => {
        data.forEach(renderUsers())
    });
} 
        
///////////////////////////////////////////////////////////////
//////////////Render Users
function renderUsers() {
    
}
