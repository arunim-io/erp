<script module>
  export { default as layout } from "$lib/layouts/MainLayout.svelte";
</script>

<script>
  import { page } from "@inertiajs/svelte";

  const { user } = $page.props;
</script>

<h1>Home page</h1>

{#if user != null}
  Logged in as {user.username}
{:else}
  Not Logged in
{/if}
