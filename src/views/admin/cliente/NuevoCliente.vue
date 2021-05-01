<template>
<div>
    <h1>Nuevo Cliente</h1>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="5"
        >
          <v-text-field
            v-model="nombres"
            :rules="nameRules"
            :counter="15"
            label="Nombres Cliente"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="7"
        >
          <v-text-field
            v-model="apellidos"
            :rules="nameRules"
            :counter="30"
            label="Apellidos"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="correo"
            :rules="emailRules"
            label="Ingrese su Correo"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="ci_nit"
            :rules="ciRules"
            label="CI / NIT"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="telefono"
            label="Telefono"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</div>
  
</template>

<script>
export default {
data: () => ({
      valid: false,
      nombres: '',
      apellidos: '',
      nameRules: [
        v => !!v || 'El Nombre es Obligatorio',
        v => v.length <= 10 || 'El Nombre debe contener a menos 15 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'El Correo es obligatorio',
        v => /.+@.+/.test(v) || 'El correo no es Valido',
      ],
      ci_nit: '',
      ciRules: [
        v => !!v || 'El CI Nit es obligatorio'
      ],
      telefono: ''
    }),
  }

</script>

<style>

</style>