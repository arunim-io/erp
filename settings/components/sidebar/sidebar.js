//@ts-check
/// <reference path="../../../globals.d.ts" />

document.addEventListener('alpine:init', () => {
    Alpine.data('sidebar', () => ({
        sidebarOpen: false,
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;
        },
        get icon() {
            let direction = this.sidebarOpen ? 'left' : 'right';
            return `mdi:arrow-collapse-${direction}`;
        },
        get tooltip() {
            let arg = this.sidebarOpen ? 'Close' : "Open";
            return `${arg} sidebar`;
        }
    }))
})