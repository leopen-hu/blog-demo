<template>
<div id="example">
  <h1>{{ msg }}</h1>
  <ul>
    <li v-for="(item, index) in list" v-bind:key="index">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Vue!",
      list: [1, 2, 3, 4]
    };
  }
};
</script>

<style scoped>
#example {
  color: red;
  height: 100vh;
}
</style>
