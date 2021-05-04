<template>
<div>
    <h1>Nuevo Producto</h1>
    <v-form ref="form" v-model="valid" >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="5"
        >
          <v-text-field
            v-model="nombre"
            :rules="nameRules"
            :counter="15"
            label="Nombre de Producto"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="precio"
            label="Precio"
            required
            type="number"
            step="0.01"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="cantidad"
            label="Ingrese Cantidad"
            type="number"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <input type="file" @change="onImagenSeleccionado">
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="descripcion"
            label="Ingrese Descripcion"
          ></v-text-field>
        </v-col>
        <v-btn color="primary" @click="registrarProducto()" :disabled="!valid">Guardar Producto</v-btn>
      </v-row>
    </v-container>
  </v-form>
</div>
  
</template>

<script>
import { guardarProducto } from '../../../services/productoService'
export default {
data: () => ({
      valid: false,
      nombre: '',
      precio: '',
      nameRules: [
        v => !!v || 'El Nombre es Obligatorio',
        v => v.length <= 200 || 'El Nombre debe contener a menos 200 caracteres',
      ],
      cantidad: '',
      descripcion: '',
      imagenSeleccionada: null,
      categoria_id: 1
    
    }),
    methods: {
      async registrarProducto(){
        try{
          this.validate();
          let formdata = new FormData();

          formdata.append("nombre", this.nombre);
          formdata.append("precio", this.precio);
          formdata.append("cantidad", this.cantidad);
          formdata.append("imagen", this.imagenSeleccionada, this.imagenSeleccionada.name);
          formdata.append("categoria_id", this.categoria_id);
          formdata.append("descripcion", this.descripcion);

          let dato = await guardarProducto(formdata);
          console.log(dato)
          this.$router.push({name: "ListaProducto"});

        }catch(error){
          console.log(error)
        }        
      },
      validate () {
        this.$refs.form.validate()
      },
      onImagenSeleccionado(event){
        this.imagenSeleccionada = event.target.files[0];
        console.log(this.imagenSeleccionada);
      }
    }
  }

</script>

<style>

</style>