import axios from "axios"
import {urlbase, getHeader} from "./../config/config"

export async function listaCliente() {
    return await axios.get(`${urlbase}/cliente`, {headers: getHeader()});
}

export async function guardarCliente(datos) {
    return await axios.post(`${urlbase}/cliente`, datos, {headers: getHeader()})
}

export async function modificarCliente(id, datos) {
    return await axios.put(`${urlbase}/cliente/${id}`, datos, {headers: getHeader()})
}

export async function eliminarCliente(id) {
    return await axios.delete(`${urlbase}/cliente/${id}`, {headers: getHeader()})
}