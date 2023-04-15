<template>
  <div class="container">
    <div class="head">
      <h4>{{ items[$route.params.id].title }}</h4>
      <p>{{ items[$route.params.id].date }}</p>
    </div>
    <p>{{ items[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ItemDetail",
  props: {
    items: Array,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  margin-top: 50px;
  height: 250px;
}
.head {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
}
</style>
