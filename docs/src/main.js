import "regenerator-runtime/runtime";

import "../../lib/dist/components/base-knobs";

import "../../lib/dist/main.js";

import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Home from "./views/Home";
import Components from "./views/Components";
import Component from "./views/Component";
import GettingStarted from "./views/GettingStarted";

Vue.config.ignoredElements = [/base-\w*/];
Vue.config.ignoredElements = [/ion-\w*/];

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        title: "Base Components",
        showInHeader: true,
        hasSidebar: false,
      },
    },
    {
      path: "/components",
      meta: { title: "Components", showInHeader: true, hasSidebar: false },
      component: Components,
    },
    {
      path: "/components/:element",
      component: Component,
      meta: { title: "Select component", hasSidebar: true },
    },
    {
      path: "/getting-started",
      component: GettingStarted,
      meta: { title: "Getting Started", showInHeader: true, hasSidebar: false },
    },
  ],
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
