import Alpine from "alpinejs";
import "iconify-icon";

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

window.Alpine = Alpine;

Alpine.start();
