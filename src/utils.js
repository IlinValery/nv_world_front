import jwt_decode from "jwt-decode";

export function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

export function getCurrentAuthUser(){
    let data = {};
    const token = localStorage.getItem('usertoken');
    if (token!==undefined){
        try {
            data = jwt_decode(token);
        } catch (err) {
            localStorage.clear();
        }
    }
    return data;
}
