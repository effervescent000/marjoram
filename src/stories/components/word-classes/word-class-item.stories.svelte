<script context="module">
  import WordClassItem from '$lib/components/word-classes/word-class-item.svelte';

  export const meta = {
    title: 'Word Class Item',
    component: WordClassItem
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <div class="grid grid-cols-4 w-fit gap-2 justify-items-center items-center">
    <WordClassItem {...args} />
  </div>
</Template>

<Story
  name="Primary"
  args={{
    wordClass: { id: 1, name: 'Test word class!', abbreviation: 'TWC', part_of_speech: 'verb' }
  }}
/>
