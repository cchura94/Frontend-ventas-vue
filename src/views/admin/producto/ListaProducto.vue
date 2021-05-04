<template>
<div>
    
  <h1>Lista Producto</h1>

  <v-data-table dense :headers="headers" :items="productos" item-key="name" class="elevation-1"></v-data-table>

</div>
</template>

<script>
import { listaProducto } from './../../../services/productoService'

export default {
    data(){
        return {
            productos: [],
            headers: [
                {
                text: 'Nombre',
                align: 'start',
                sortable: false,
                value: 'nombre',
                },
                { text: 'Precio', value: 'precio' },
                { text: 'Cantidad', value: 'cantidad' },
                { text: 'categoria', value: 'categoria_id' },
                { text: 'Acciones', value: 'acciones' },
            ],
        }
    },
    async mounted(){
        let datos = await listaProducto()
        console.log(datos);
        this.productos = datos.data.data;
    }

}
</script>

<style>

</style>