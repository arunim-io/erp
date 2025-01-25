import { createInertiaApp, type ResolvedComponent } from "@inertiajs/svelte";
import { mount } from "svelte";
import "./index.css";

createInertiaApp({
  resolve(name) {
    const pages = import.meta.glob("./pages/**/*.svelte", { eager: true });

    return pages[`./pages/${name}.svelte`] as ResolvedComponent;
  },
  setup({ el, App, props }) {
    if (el != null) mount(App, { target: el, props });
  },
});
