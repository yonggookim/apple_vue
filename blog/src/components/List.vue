<template>
  <div>
      <h5>{{블로그글.title}}</h5>
      <p>{{블로그글.content}}</p>
      <p>{{블로그글.date}}</p>
  </div>
</template>

<script>
export default {
    name : 'List',
    props : {
        블로그글 : Array
    },
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>