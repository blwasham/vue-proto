<template>
  <div>
    <h1>User Home</h1>
    <h5>({{ id }})</h5>
  </div>
</template>

<script>
export default {
  name: 'UserHome',
  props: ['id']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}
</style>
