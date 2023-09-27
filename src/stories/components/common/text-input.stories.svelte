<script context="module">
  import TextInput from '$lib/components/common/text-input.svelte';

  export const meta = {
    title: 'Text Input',
    component: TextInput
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <TextInput name="test" {...args} />
</Template>

<Story name="Primary" />

<Story name="Secret input" args={{ style: 'secret' }} />
