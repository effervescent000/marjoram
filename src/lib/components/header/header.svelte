<script lang="ts">
  import { userStore } from '$lib/stores/user-store';
  import LangSelectorWrapper from '../language-selection/lang-selector-wrapper.svelte';
  import Auth from './auth.svelte';
  import NavBar from './nav/nav-bar.svelte';
</script>

<div class="flex justify-between">
  <span>Branding!</span>
  <div class="flex flex-col">
    <Auth />
    {#if $userStore}
      <LangSelectorWrapper />
    {/if}
  </div>
</div>
<NavBar />
