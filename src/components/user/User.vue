<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ $route.params.id }}</h2>
    <router-link to="/user/bryan">/user/bryan</router-link>
    <router-link to="/user/bryan/profile">/user/bryan/profile</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      title: 'User Page'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
    color: red;
  }
</style>
