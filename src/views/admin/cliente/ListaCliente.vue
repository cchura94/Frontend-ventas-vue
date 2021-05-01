<template>
<div>
    
  <h1>Lista Cliente</h1>

  <v-data-table dense :headers="headers" :items="clientes" item-key="name" class="elevation-1"></v-data-table>

</div>
</template>

<script>
import { listaCliente } from "./../../../services/clienteService"

export default {
    data(){
        return {
            clientes: [],
            headers: [
                {
                text: 'Nombres',
                align: 'start',
                sortable: false,
                value: 'nombres',
                },
                { text: 'Apellidos', value: 'apellidos' },
                { text: 'Ci / NIT', value: 'ci_nit' },
                { text: 'Telefono', value: 'telefono' },
                { text: 'Correo', value: 'correo' },
            ],
        }
    },
    async mounted(){
        let datos = await listaCliente();
        this.clientes = datos.data.data;
    }

}
</script>

<style>

</style>