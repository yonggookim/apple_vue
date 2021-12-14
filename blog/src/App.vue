<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VueLog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#"><router-link to="/">홈 페이지</router-link></a>
        <a class="nav-link" href="#"><router-link to="/list">리스트 페이지</router-link></a>
        <a class="nav-link" href="#"><router-link to="/detail">상세 페이지</router-link></a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
  
  <!-- <List :블로그글="블로그글들[i]" v-for="(v,i) in 블로그글들" :key="i"></List> -->
  <!-- <router-view :블로그글="블로그글들[i]" v-for="(v,i) in 블로그글들" :key="i"></router-view> -->
  <router-view :블로그글들="블로그글들"></router-view>

</template>

<script>
// import List from './components/List.vue'
import 작명1 from './assets/blog'

export default {
  name: 'App',
  data(){
    return{
      블로그글들 : 작명1
    }
  },
  components: {
    // List : List
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
}
</style>
