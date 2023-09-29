<script context="module">
  import TextArea from '$lib/components/common/text-area.svelte';

  export const meta = {
    title: 'Text Area',
    component: TextArea
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <TextArea initialValue="Testing the text area" name="fake" {...args} />
</Template>

<Story name="Primary" />

<Story name="Tall and narrow" args={{ height: 'xl' }} />

<Story name="Max size" args={{ height: 'xl', width: 'xl' }} />
