<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="link" to="/">
        <a class="navbar-brand" href="#">Vue_log</a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link class="link" to="/">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </router-link>
          <router-link class="link" to="/list">
            <li class="nav-item">
              <a class="nav-link" href="#">List</a>
            </li>
          </router-link>
          <li class="nav-item">
            <a class="nav-link disabled">준비중...</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- 라우터로 이동하면 컴포넌트를 보여줄 자리에 router-view 컴포넌트 넣어줌
    원래 ItemList 컴포넌트에 넘겨줄 items라는 props도 이 컴포넌트에 전해주면 됨 -->
  <router-view v-bind:items="items"></router-view>

  <!-- <ItemList v-bind:items="items" /> -->
</template>

<script>
import data from "./assets/data.js";

export default {
  name: "App",
  data() {
    return {
      items: data,
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.link {
  text-decoration: none;
  color: black;
}
.blogImg {
  width: 100%;
  margin-top: 50px;
}
</style>
