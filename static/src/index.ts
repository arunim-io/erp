import type { ResolvedComponent } from "@inertiajs/svelte";
import { createInertiaApp } from "@inertiajs/svelte";
import { mount } from "svelte";
import "./index.css";

createInertiaApp({
  async resolve(name) {
    const pages = import.meta.glob("./pages/**/*.svelte");

    return await pages[`./pages/${name}.svelte`]() as ResolvedComponent;
  },
  setup({ el, App, props }) {
    if (el != null) {
      mount(App, { target: el, props });
    }
  },
});
