import { createWebHistory, createRouter } from "vue-router";
import ItemList from "./components/ItemList.vue";
import BlogIntro from "./components/BlogIntro.vue";
import ItemDetail from "./components/ItemDetail.vue";
import NotFoundError from "./components/NotFoundError.vue";
import BlogAuthor from "./components/BlogAuthor.vue";
import ItemComment from "./components/ItemComment.vue";

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
    children: [
      {
        path: "author",
        component: BlogAuthor,
      },
      {
        path: "comment",
        component: ItemComment,
      },
    ],
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
