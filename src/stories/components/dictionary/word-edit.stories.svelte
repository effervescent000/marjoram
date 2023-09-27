<script context="module">
  import WordEdit from '$lib/components/dictionary/word-edit.svelte';

  export const meta = {
    title: 'Word Edit',
    component: WordEdit
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import type { Word, WordLink } from '$lib/types/words-types';

  const globalWordLinks: WordLink[] = [
    {
      id: 1,
      definition: 'test link',
      hint: 'another',
      part_of_speech: 'verb'
    },
    {
      id: 2,
      definition: 'another link',
      hint: null,
      part_of_speech: 'verb'
    }
  ];

  const word: Word = {
    id: 1,
    language_id: 1,
    part_of_speech: 'verb',
    word: 'test',
    notes: null,
    word_links: [
      {
        id: 1,
        definition: 'test link',
        hint: 'another',
        part_of_speech: 'verb'
      }
    ]
  };
</script>

<Template let:args>
  <WordEdit {globalWordLinks} {...args} />
</Template>

<Story name="New word" />

<Story name="Edit word" args={{ word }} />
