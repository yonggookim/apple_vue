<template>
  <div @click="$emit('clickfilter', filter); fire" :class="`${filter} filter-item`" :style="{backgroundImage:`url(${url})`}">
    <slot></slot>  
  </div> 
  <!-- 이부분 백틱 활용 문법 확인 -->
    <!-- <button @click="fire">버튼</button> -->
    <!-- 이 버튼은 컴퍼간에 데이터 보내는 방법(emitter) 익히는 용 -->
</template>

<script>

export default {
    name : 'filterbox',
    props :{
        url: String,
        filter: String
    },
    methods:{
      fire(){
        this.emitter.emit('작명1', this.filter)
        console.log(this.filter)
      }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
  cursor: pointer;
}
</style>