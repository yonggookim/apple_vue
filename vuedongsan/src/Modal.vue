<template>
  <div class="black-bg" > <!-- ""안의 조건식 참이면 보여-->
      <div class="white-bg">
        <img :src="one[누른번호].image">
        <h4>{{one[누른번호].title}}</h4>
        <p>{{one[누른번호].content}}}</p>
        <!-- <input @input="month=$event.target.value"> -->
        <input v-model="month">
        <!-- .number를 붙이니까 '123'=> 123 만들 뿐 아니라 아예 숫자만 받는구나.. -->
        <p>{{month}}개월 선택 : {{one[누른번호].price*month}}</p>
        <!-- 오.. 이런식도 가능하구나 -->
        <button @click="$emit('closeModal')">닫기</button>
        <!-- <button v-on:click="open = false">닫기</button> -->
      </div>
    </div>
</template>

<script>
export default {
    name : 'Modal',
    data(){
        return{
            month : 1,
        }
    },
    watch : {
      month(v){
          console.log(v);
          if(isNaN(v) == true){
              alert('문자를 입력하지 마시오');
              this.month = 1;
          }else if(v==0){
              alert('0보다 큰 수를 입력하시오')
              this.month = 1;
          }
      }  
    },
    props : {
        누른번호 : Number,
        one: Array,
    }
}
</script>

<style>

</style>