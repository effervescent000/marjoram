<script lang="ts">
  import type { Route } from '$lib/types/common-types';

  import NavItemSidebar from './nav-item-sidebar.svelte';

  export let routes: Route[];
  export let nestedLevel: number = 0;
  export let collapsed = false;
  export let loggedIn: boolean;
  export let parentPath = '';
</script>

<div>
  {#if !collapsed}
    {#each routes as route}
      <NavItemSidebar {nestedLevel} {route} {loggedIn} {parentPath} />
    {/each}
  {/if}
</div>
