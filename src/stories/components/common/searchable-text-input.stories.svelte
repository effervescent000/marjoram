<script context="module">
  import SearchableTextInput from '$lib/components/common/searchable-text-input.svelte';

  export const meta = {
    title: 'Searchable Text Input',
    component: SearchableTextInput
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';

  const options = [
    { label: 'Test', value: 1 },
    { label: 'Test (two)', value: 3 },
    { label: 'other option', value: 2 }
  ];
</script>

<Template let:args>
  <SearchableTextInput name="test" label="Search" {options} {...args} />
</Template>

<Story name="Primary" args={{ vertical: true }} />
