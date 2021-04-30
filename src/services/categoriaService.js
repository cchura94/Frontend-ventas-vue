import axios from "axios"
import {urlbase, getHeader} from "./../config/config"

export async function listaCategoria() {
    return await axios.get(`${urlbase}/categoria`, {headers: getHeader()});
}

export async function guardarCategoria(datos) {
    return await axios.post(`${urlbase}/categoria`, datos, {headers: getHeader()})
}

export async function modificarCategoria(id, datos) {
    return await axios.put(`${urlbase}/categoria/${id}`, datos, {headers: getHeader()})
}

export async function eliminarCategoria(id) {
    return await axios.delete(`${urlbase}/categoria/${id}`, {headers: getHeader()})
}