<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>INGRESAR</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon large v-on="on">
                  <v-icon>mdi-help</v-icon>
                </v-btn>
              </template>
              <span>Ingrese su correo y contraseña</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Correo"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                v-model="usuario.email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Contraseña"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="usuario.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          {{ usuario }}
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login()">Ingresar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as authService from "../../services/authService";
export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      let auth = await authService.login(this.usuario);
      console.log(auth.data);
      // guardamos el token
      localStorage.setItem("auth", btoa(JSON.stringify(auth.data)));
      // redireccionamos
      this.$router.push("/admin");
    },
  },
};
</script>

<style>
</style>