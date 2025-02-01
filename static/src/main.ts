import { createInertiaApp } from "@inertiajs/vue3";
import { createPinia } from "pinia";
import { createApp, h } from "vue";
import "./main.css";

createInertiaApp({
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  async resolve(name) {
    const pages = import.meta.glob("./pages/**/*.vue");

    return await pages[`./pages/${name}.vue`]();
  },
  setup({ el, App, props }) {
    createApp({ render: () => h(App, props) }).use(createPinia()).mount(el);
  },
});
