<template>
  <div id="app">

    <div class="black-bg" v-if="open == true"> <!-- ""안의 조건식 참이면 보여-->
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
        <button v-on:click="open = false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="v in nav_menu" :key="v">{{v}}</a>
    </div>

    <div v-for="(v, i) in one" :key="v">
      <img :src="one[i].image">
      <h4 @click="open = true">{{one[i].title}}</h4>
      <p>{{one[i].price}}</p>
      <button @click="신고수[i]++">허위매물신고</button> <span>신고수 : {{신고수[i]}}</span>
    </div>
      <!-- v-on: <=> @ (개꿀) data를 이렇게 간단히 바꿔버리네 오 신기
      그리고 배열값을 증가시키는건 vue2는 안되고 vue3만되네-->
    
  </div>

</template>

<script>
import rooms from './assets/oneroom.js'

export default {
  name: 'App',
  data(){
    return{
      one: rooms,
      open: false,
      신고수: [0,0,0],
      nav_menu: ['Home', 'Products', 'About'],
      products: ['원룸', '투룸', '쓰리룸']
    }
  },
  components: {
  },
  methods:{
    
  }
}
</script>

<style>
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.menu{
  background-color: rgb(59, 96, 165);
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgb(37, 37, 41);
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
img{
  width: 500px;
  margin-top: 50px;
}
button{
  padding: 5px;
  background-color: rgb(248, 227, 231);
  border-radius: 5px;
}
</style>