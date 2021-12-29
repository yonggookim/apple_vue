<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step==1" @click="step++">Next</li>
        <li v-if="step==2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

------------- 걍.. vuex 연습했던 용도로 사그락 --------------
    <p>{{name}} {{name1}}</p>

    <p>{{$store.state.more}}</p>
    <button @click="$store.dispatch('getData')">+ button</button>
    <p>{{now2}} {{count}}</p>
    <button @click="count++">count</button>

    <h4>안녕 {{$store.state.name}}</h4>
    <button @click="$store.commit('changename')">버튼</button>

    <h4>나이 : {{$store.state.age}}</h4>
    <button @click="$store.commit('plusage', 10)">버튼</button>
     : 세컨드 매개변수(파라미터)의 값으로 10을 보낸다.

     ----------------------------------------------------

    <Container @text="text=$event" :poDatas="poDatas" :step="step" :url="url"/>
    <button v-if="step == 0" @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
  
</template>

<script>
import Container from './components/Container.vue'
import poDatas from './assets/posting'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: "App",
  data(){
    return{
      poDatas : poDatas,
      step : 3,
      url : "",
      moreNumber : 0,
      text: "",
      chofilter : "",
      boolLike : false,
      count : 0,
    }
  },
  mounted(){
    this.emitter.on('작명1', (v)=>{
      this.chofilter=v;
      console.log("hahaha")
      console.log(this.chofilter);
    }),
    this.emitter.on('pluslike', (v)=>{
      if(this.boolLike == false){
        this.poDatas[v].likes++;
        this.boolLike=true;
      }else{
         this.poDatas[v].likes--;
         this.boolLike=false;
      }
    })
  },
  components: {
    Container,
  },
  computed:{
    now2(){
      return new Date()
    },
    name(){
      return this.$store.state.name
    },
    ...mapState(['name', 'age', 'likes']), 
    //이렇게 단체로 vuex 코드를 줄일 수 O
    ...mapState({ name1:'name', age1:'age', likes1: 'likes'}), 
    //oh.. Json형식으로 새로운 작명과 함께 코드를 줄일 수도 O\
    ...mapMutations([ 'setMore', 'changename', 'plusage' ]),
    ...mapActions([ 'getData' ]),
  },
  methods:{
    now1(){
      return new Date()
    },
    publish(){
      var 내게시물 = { 
      name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.url,
      likes: 0,
      date: "May 15",
      liked: false,
      content: this.text,
      filter: this.chofilter
    };//추가할 데이터를 형식에 맞게 잘 받고난 뒤
      this.poDatas.unshift(내게시물);
      this.step = 0;
    },
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.moreNumber}.json`)
      .then((result)=>{ 
      //arrow함수는 함수내의 this를 재정의하지 X, 밖의 this를 그대로 갖다쓴다.
        console.log(result.data);
        this.poDatas.push(result.data);
        this.moreNumber++;
        console.log(this.url);
      })
    },
    upload(e){
      let file = e.target.files;
      console.log(file);
      console.log(file[0]);
      this.url = URL.createObjectURL(file[0]);
      this.step++;
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
button{
  background: rgb(208, 210, 221);
  cursor: pointer;
  border-radius: 4px;
}
</style>
