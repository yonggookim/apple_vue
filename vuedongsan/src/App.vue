<template>
  <div id="app">
<!--------------------------- Modal 컴퍼넌트 --------------------------->
  <transition name="fade">
    <Modal @closeModal="open = false" :one="one" :누른번호="누른번호" v-if="open == true"></Modal>
    <!-- 아.. v-if를 컴퍼넌트 안에 넣어두면 open =true 되는 것에 반응을 안하는구나 -->
  </transition>
    <!-- <div class="black-bg" v-if="open == true">
      <div class="white-bg">
        <img :src="one[누른번호].image">
        <h4>{{one[누른번호].title}}</h4>
        <p>{{one[누른번호].content}}}</p>
        <p>{{one[누른번호].price}}</p>
        <discount></discount>
        <button v-on:click="open = false">닫기</button>
      </div>
    </div> -->
<!---------------------------------------------------------------------->
    <div class="menu">
      <a v-for="v in nav_menu" :key="v">{{v}}</a>
    </div>

    <discount v-if="showDiscount==true"></discount>

    <button @click="priceSort">가격순 정렬</button>
    <button @click="sortBack">되돌리기</button>

<!-------------------------- Card 컴퍼넌트 ------------------------------>
   
    <Card @openModal="open=true; 누른번호= xxx.id" :xxx="one[i]" v-for="(v,i) in one" :key="v"></Card>
    <!-- custom event 사용하여 h4에 온클릭 주기( 간단히 '누른번호=i' 였어도 똑같이 작동) -->
  

    <!-- <div v-for="(v, i) in one" :key="v">
      <img :src="one[i].image">
      <h4 @click="open = true; 누른번호=i">{{one[i].title}}</h4>
      <p>{{one[i].price}}</p>
      <button @click="신고수[i]++">허위매물신고</button> <span>신고수 : {{신고수[i]}}</span>
    </div> -->
    
    <!------------------------------------------------------------------->
  </div>
</template>

<script>
import rooms from './assets/oneroom.js'
import Discount from './Discount.vue'
import Modal from './Modal.vue'
import Card from './Card.vue'

export default {
  name: 'App',
  data(){
    return{
      showDiscount: true,
      pricetoggle: 1,
      oneOrigin:rooms, //rooms데이타를 보존할 원본을 따로두고
      누른번호: 0,
      one: [...rooms], //Data는 걍 import이후 바로 갖다 쓰면 되는구마이
      open: false,
      신고수: [0,0,0],
      nav_menu: ['Home', 'Products', 'About'],
      products: ['원룸', '투룸', '쓰리룸']
    }
  },
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
    // Component는 import이후 이렇게 컴퍼넌트 등록이 필수
    // 왼쪽 오른쪽 이름이 같으면 Discount; 한문자로 축약해서 쓸수도 O
  },
  methods:{
    priceSort(){
      if(this.pricetoggle == 1){
          this.one.sort(function(a, b){
            return a.price - b.price;
          })
          this.pricetoggle= 2;
      }else{
        this.one.sort(function(a, b){
          return b.price - a.price;
        })
        this.pricetoggle =1;
      }
    }
    ,
    sortBack(){
      this.one = [...this.oneOrigin];
      //배열끼리의 등호는 값을 대입 뿐 아니라'공유'하게되는 문제가 있음.
      this.pricetoggle= 1;
    }
  },
  mounted(){ //mount되고 나서 실행될 코드
    setTimeout(()=>{ //'바깥의 this'를 잘 갖다 쓰려면 상대적으로 헐거운 벽을 가진 익명함수를 써라
      this.showDiscount = false;
    },3000)
  }
}
</script>

<style>
.fade-enter-from{
  transform: translateY(-1000px);
}
.fade-enter-active{
  transition: all 0.7s;
}
.fade-enter-to{
  transform: translateY(0px);
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 0.5s;
}
.fade-leave-to{
  opacity: 0;
}

body{
  margin: 0 0 20px 0;
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
  width: 100%;
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
  background-color: rgb(228, 209, 212);
  border-radius: 5px;
  margin: 10px;
}

</style>