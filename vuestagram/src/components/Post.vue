<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{poData.name}}</span>
    </div>
    <div @click="pluslike" :class="`${poData.filter} post-body`" :style="{ backgroundImage : `url(${poData.postImage})` }"></div>
    <div class=" post-content" >
      <p><b>{{poData.likes}}</b> Likes <span class="ddabong" @click="pluslike"> 👍</span></p>
      <p><strong>{{poData.name}} </strong> {{poData.content}}</p>
      <p class="date">{{poData.date}}</p>
    </div>
</div> 
</template>

<script>
export default {
  data(){
    return{
      boolLike : false,  
    }
  },
  props:{
    poData : Object,
    index : Number,
  },
  methods:{
    pluslike(){
      this.emitter.emit('pluslike', this.index)
    }
  }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
  cursor: pointer;;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
.ddabong{
  cursor: pointer;
}
</style>