<template>
      <!-- <div>
          <h5>{{블로그글들[0].title}}</h5>
          <p>{{블로그글들[0].content}}</p>
          <p>{{블로그글들[0].date}}</p>
      </div>
      <div>
          <h5>{{블로그글들[1].title}}</h5>
          <p>{{블로그글들[1].content}}</p>
          <p>{{블로그글들[1].date}}</p>
      </div>
      <div>
          <h5>{{블로그글들[2].title}}</h5>
          <p>{{블로그글들[2].content}}</p>
          <p>{{블로그글들[2].date}}</p>
      </div> -->

      <div v-for="(v, i) in 블로그글들" :key="i">
          <h5 @click="$router.push('/detail/'+i)">{{v.content}}</h5>
          <p>{{v.content}}</p>
          <p>{{v.date}}</p>
      </div>
</template>

<script>
export default {
    name : 'List',
    props : {
        블로그글들 : Array
    },
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>