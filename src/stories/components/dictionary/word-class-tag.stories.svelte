<script context="module">
  import WordClassTag from '$lib/components/dictionary/word-class-tag.svelte';

  export const meta = {
    title: 'Word Class Tag',
    component: WordClassTag
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <WordClassTag
    id={1}
    globalWordClasses={[
      {
        id: 1,
        name: 'test word class',
        abbreviation: 'twc',
        language_id: 1,
        part_of_speech: 'verb'
      }
    ]}
    removeCallback={() => {}}
  />
</Template>

<Story name="Primary" />
