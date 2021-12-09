<template>
    <div>
      <img :src="xxx.image" class="room-img">
      <h4 @click="$emit('openModal', xxx.id)">{{xxx.title}}</h4>
      <!-- 자식컴퍼는 부모 컴퍼의 데이타를 바꿀 수 없어 때문에 자식컴퍼의
          특정 태그에서 반응하는 onclick을 만들고파? 부모에게 신호를 날리는 것으로 대신 가능해짐. -->
      <p>{{xxx.price}}</p>
    </div>
</template>

<script>
export default {
    name : "Card",
    props : {
        xxx : Object,
        누른번호 : Number, //안써도 오류 X 나중에 디버깅 위해서 남겨두는 코드
    }
}
</script>

<style>

</style>