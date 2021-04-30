export const urlbase = "http://127.0.0.1:8000/api"; 

export const getHeader = function(){
    const auth = JSON.parse(atob(localStorage.getItem("auth")));
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer '+auth.token
    }
    return headers;
}