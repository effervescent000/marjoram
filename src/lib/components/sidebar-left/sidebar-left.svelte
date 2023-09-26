<script lang="ts">
  import { selectedLanguage } from '$lib/stores/language-store';
  import { userStore } from '$lib/stores/user-store';

  import { navRoutes } from '$lib/constants/nav-routes';

  import Auth from '../header/auth.svelte';
  import LangSelectorWrapper from '../header/language-selection/lang-selector-wrapper.svelte';
  import NavSidebar from './nav/nav-sidebar.svelte';

  $: routes = navRoutes($selectedLanguage);
</script>

<div class="border-accent-primary border-r p-2 border-solid min-h-screen flex flex-col gap-2">
  <Auth />
  {#if $userStore}
    <LangSelectorWrapper />
  {/if}
  <NavSidebar {routes} loggedIn={!!$userStore} />
</div>
