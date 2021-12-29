<template>
<div style="padding:10pxpx;">
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div class="post-header">
        <div class="profile" style="background-Image:url()"></div>
        <span class="profile-name">{{follower}}</span>
    </div>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
    name: "mypage",
    setup(){
        let follower = ref([]);

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                follower.value = a.data // get요청시 경로가 '/파일이름' 으로 충분하네?.. ㅇㅋ
        })
        console.log(follower.value)
        }) 
        return {follower}
    },
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>