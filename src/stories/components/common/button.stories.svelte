<script context="module">
  import Button from '$lib/components/common/button.svelte';

  export const meta = {
    title: 'Button',
    component: Button
  };
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <Button {...args}>Test button!</Button>
</Template>

<Story name="Plain" />
