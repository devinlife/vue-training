import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";

const app = createApp(App);

app.config.errorHandler = (error, vm, info) => {
  console.log(error.message);

  // Redirect to error page
  app.config.globalProperties.$router.push({
    name: "Error",
    query: { message: error.message },
  });
};

app.use(router);

app.mount("#app");
