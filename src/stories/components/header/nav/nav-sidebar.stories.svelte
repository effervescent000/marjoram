<script context="module">
  export const meta = {
    title: 'Nav Sidebar',
    component: NavSidebar
  };
</script>

<script lang="ts">
  import { NavSidebar } from '$lib';

  import type { Route } from '$lib/types/common-types';

  import { Story, Template } from '@storybook/addon-svelte-csf';

  const testRoutes: Route[] = [
    { label: 'A test route', path: '/', children: [{ label: 'A child route', path: '/child' }] },
    { label: 'Another route!', path: '/two' },
    { label: 'Logged in route', path: '/loggedIn', requiresLogin: true }
  ];
</script>

<Template let:args>
  <NavSidebar routes={testRoutes} {...args} />
</Template>

<Story name="Logged In" />
<Story name="Logged out" />
