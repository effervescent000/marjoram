<script lang="ts">
  import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

  import type { Route } from '$lib/types/common-types';

  import ButtonWithIcon from '$lib/components/common/button-with-icon.svelte';
  import NavSidebar from './nav-sidebar.svelte';

  export let route: Route;
  export let nestedLevel: number;
  export let loggedIn: boolean;
  export let parentPath: string;

  let collapsedChildren = true;
  $: currentPath = parentPath + route.path;
</script>

{#if !route.requiresLogin || (route.requiresLogin && loggedIn)}
  <div style={`margin-left: ${1.5 * nestedLevel}rem;`}>
    <ButtonWithIcon
      icon={collapsedChildren ? faCaretRight : faCaretDown}
      onClick={() => (collapsedChildren = !collapsedChildren)}
    />
    <a href={currentPath}>{route.label}</a>
    {#if route.children}
      <NavSidebar
        routes={route.children}
        nestedLevel={nestedLevel + 1}
        collapsed={collapsedChildren}
        parentPath={currentPath}
        {loggedIn}
      />
    {/if}
  </div>
{/if}
