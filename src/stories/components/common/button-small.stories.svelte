<script context="module">
  import Button from '$lib/components/common/button.svelte';

  export const meta = {
    title: 'Button (Small)',
    component: Button
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <Button {...args}>a</Button>
</Template>

<Story name="Plain" />

<Story name="Circle" args={{ shape: 'circle' }} />
