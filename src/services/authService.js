import axios from "axios"

export async function login(usuario) {
    try{
        let respuesta = await axios.post("//127.0.0.1:8000/api/login", usuario);
        return respuesta;
    }catch(error){
        console.log(error)
    }
}