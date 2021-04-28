<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>EMPRESA</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn icon to="/productos">
      <v-icon>mdi-post</v-icon>
    </v-btn>

    <v-btn icon to="/login" v-if="!auth">
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn icon to="/admin" v-if="auth">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data(){
    return {
      auth: false
    }
  },
  methods:{

  },
  mounted(){
    try{
      let authjson = JSON.parse(atob(localStorage.getItem("auth"))); 
      if(authjson && authjson.token){
        this.auth = true
      }
    }catch(error){
      localStorage.clear();
      this.$router.push("/login");
    }
  },
  created(){

  }
};
</script>

<style>
</style>