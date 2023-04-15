<template>
  <div class="listContainer">
    <router-link
      v-for="(item, i) in items"
      :key="i"
      class="link"
      :to="'/detail/' + item.number"
    >
      <div class="itemContainer">
        <h5 class="title">
          {{ item.title }}
        </h5>
        <p class="content">{{ item.date }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    items: Array,
  },
};
</script>

<style>
.link {
  text-decoration: none;
  color: black;
}
.listContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.itemContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px;
  border-radius: 10px;
  width: 80%;
  padding: 8px;
  background-color: rgb(246, 245, 244);
}
.title {
  margin: 0;
}
.content {
  margin: 0;
}
</style>
