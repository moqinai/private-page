<!--
 * @Author: lpc
 * @Date: 2024-08-26 18:20:20
 * @LastEditors: lpc
 * @LastEditTime: 2024-08-26 20:35:44
 * @FilePath: /private-object-page/src/components/HelloWorld.vue
 * @Description: 
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      第一个测试部署页面

    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
