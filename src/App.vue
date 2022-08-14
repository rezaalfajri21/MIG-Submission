<template>
  <v-app style="background: #E5E5E5">
    <div v-if="aktif">
      <AppBar></AppBar>
    </div>
    <div v-if="aktif" >
      <Side></Side>
      </div>
    <router-view style="background: #E5E5E5"/>
  </v-app>
</template>

<script>
import Side from './components/Side.vue'
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',
  components: {
      Side, AppBar
    },

  data(){
    return{
      aktif: false,
    }
  },
  methods: {
    checkAuth() {
      this.aktif = localStorage.TOKEN;
    },
  },
  created(){
    // localStorage.removeItem('TOKEN');

    this.checkAuth();
  },
  updated(){
    this.checkAuth();
  },
  mounted(){
    this.checkAuth();
  }
};
</script>
