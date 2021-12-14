<template>
  <div class="black-bg" @click="$emit('closeImage')">
      <div class="white-bg openImage">
        <img :src="one[누른번호].image" alt="" >
      </div>
  </div>
</template>

<script>
export default {
  name : 'Modal',
  props:{
    one : Array,
    xxx : Object,
    누른번호 : Number,
  },
  methods:{
  }
}
</script>

<style>

</style>