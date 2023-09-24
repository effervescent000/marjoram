<script context="module">
  import Select from '$lib/components/common/select.svelte';

  export const meta = {
    title: 'Select',
    component: Select
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';

  const standardOptions = [
    { label: 'an option', value: 'test' },
    { label: 'another option', value: 1 }
  ];
</script>

<Template let:args>
  <Select {...args} />
</Template>

<Story name="Primary" args={{ options: standardOptions }} />
