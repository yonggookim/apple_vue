<template>
  <div id="app">
    <div class="menu">
      <a v-for="v in nav_menu" :key="v">{{v}}</a>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <h4>xx 원룸</h4>
      <p :style="property1">xx 만원</p>
    </div>
    <div>
      <h4>xx 원룸</h4>
      <p>xx 만원</p>
    </div>
    <div>
      <h4>xx 원룸</h4>
      <p>xx 만원</p>
    </div>
    
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      nav_menu: ['Home', 'Products', 'About']
    }
  },
  components: {
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
  margin-top: 0px;
}
.menu{
  background-color: cornflowerblue;
  color: white;
  border-radius: 5px;
  width: 500px;
  height: 100px;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.menu > a{
  
  padding: 20px;
}
</style>
