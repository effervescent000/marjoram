<script lang="ts">
  import { NAV_ROUTES } from '$lib/constants/nav-routes';

  import NavItem from './nav-item.svelte';
</script>

<div class="flex">
  {#each NAV_ROUTES as route}
    <NavItem {...route} />
  {/each}
</div>
