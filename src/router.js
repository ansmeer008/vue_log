import { createWebHistory, createRouter } from "vue-router";
import ItemList from "./components/ItemList.vue";
import BlogIntro from "./components/BlogIntro.vue";
import ItemDetail from "./components/ItemDetail.vue";
import NotFoundError from "./components/NotFoundError.vue";

const routes = [
  {
    path: "/",
    component: BlogIntro,
  },
  {
    path: "/list",
    component: ItemList,
  },
  {
    path: "/detail/:id",
    component: ItemDetail,
  },
  {
    path: "/:anything(.*)",
    component: NotFoundError,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
