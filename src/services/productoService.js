import axios from "axios"
import {urlbase, getHeader} from "./../config/config"

export async function listaProducto() {
    return await axios.get(`${urlbase}/producto`, {headers: getHeader()});
}

export async function guardarProducto(datos) {
    return await axios.post(`${urlbase}/producto`, datos, {headers: getHeader()})
}

export async function modificarProducto(id, datos) {
    return await axios.put(`${urlbase}/producto/${id}`, datos, {headers: getHeader()})
}

export async function eliminarProducto(id) {
    return await axios.delete(`${urlbase}/producto/${id}`, {headers: getHeader()})
}