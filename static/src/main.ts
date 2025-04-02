import "iconify-icon";
import "flowbite/dist/flowbite";
import Alpine from 'alpinejs';
import { initFlowbite } from 'flowbite'

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

window.Alpine = Alpine

Alpine.start()

initFlowbite()
