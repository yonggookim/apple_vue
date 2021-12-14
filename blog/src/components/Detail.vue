<template>
  <div>
      <h4>상세페이지</h4>
      <h5>{{블로그글들[$route.params.koo].title}}</h5>
      <p>{{블로그글들[$route.params.koo].content}}</p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "detail",
    props:{
        블로그글들: Array
    }
}
</script>

<style>

</style>