import { createRouter, createWebHistory } from "vue-router";
import listView from "../components/listPage.vue";
import HelloWorld from "../components/HelloWorld.vue";
import FormView from "../components/editPage.vue";
import AddList from "../components/formPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "listView",
      component: listView,
    },
    {
      path: "/hello",
      name: "HelloWorld",
      component: <HelloWorld msg="hello" />,
    },
    {
      path: "/formView/:myObject",
      name: "FormView",
      component: <FormView />,
      props: true,
    },
    {
      path: "/addList",
      name: "AddList",
      component: <AddList />,
    },
  ],
});

export default router;
