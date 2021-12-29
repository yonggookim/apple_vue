<template>
  <div>
    <div v-if="step == 0">
      <Post :poData="poDatas[i]" :index="i" v-for="(v, i) in poDatas" :key="i"  />
    </div>

    <div v-if="step == 1">
    <div :class="`${chofilter} upload-image`" :style="{ backgroundImage : `url(${url})`}"></div>
    <div class="filters">
      <!-- <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div> -->
      <FilterBox @clickfilter="chofilter=$event" v-for="(v,i) in filters" :key="i" :url="url" :filter="v">{{v}}</FilterBox>
    
    </div>
    </div>
    <!-- 글작성페이지 -->

    <div v-if="step == 2">
      <div :class="chofilter" class=" upload-image" :style="{ backgroundImage : `url(${url})`}"></div>
      <div class="write">
        <textarea @input="$emit('text', $event.target.value)" class="write-box" >write!</textarea>
<!-- ★★ @input이용 : text를 받으며 상위컴퍼로 보내면
          그리고 step==1 에서 class 주던 방식을 바꿔봤다.★★ -->
      </div>
      </div>

    <div v-if="step == 3">
      <MyPage/>
    </div>
  </div>
   
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue"
import MyPage from "./MyPage.vue"

export default {
  data(){
    return{
      filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
      "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
      "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      text: "",
      chofilter : "",
    }
  },
  mounted(){
    this.emitter.on('작명1', (v)=>{
      console.log(v);
      this.chofilter=v;
    })
  },
  components: {
    Post,
    FilterBox,
    MyPage,
  },
  props: {
    poDatas: Array,
    step: Number,
    url: String,
  },
  methods:{

  }
};
</script>

<style>
textarea::placeholder{
  color : rgb(154, 139, 218);
}
.upload-image{
width: 100%;
height: 450px;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>
