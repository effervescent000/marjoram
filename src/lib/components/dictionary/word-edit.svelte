<script lang="ts">
  import { enhance } from '$app/forms';

  import type { Word, WordLink } from '$lib/types/words-types.js';
  import type { WordClass } from '$lib/types/grammar-types';

  import { partOfSpeechOptions } from '$lib/constants/word-constants.js';

  import { composeDefinitionWithHint } from '$lib/utils/word-utils.js';

  import SearchableTextInput from '$lib/components/common/searchable-text-input.svelte';
  import TextInput from '$lib/components/common/text-input.svelte';
  import { Select } from '$lib';
  import Button from '../common/button.svelte';
  import Pronunciation from './pronunciation.svelte';
  import HiddenInput from '../common/hidden-input.svelte';
  import WordClassTag from './word-class-tag.svelte';
  import { selectedLanguage } from '$lib/stores/language-store';

  export let word: Word | undefined = undefined;
  export let globalWordLinks: WordLink[];
  export let globalWordClasses: WordClass[];
  export let language_id: number;
  export let pronunciation: string | undefined = undefined;

  let word_link_ids = word?.word_links.map((link) => link.id) || [];
  let word_class_ids = word?.word_classes.map((wc) => wc.id) || [];

  const wordLinkOptions = globalWordLinks.map((link) => ({
    label: composeDefinitionWithHint(link),
    value: link.id
  }));
  const wordClassOptions = globalWordClasses.map((wc) => ({
    label: `${wc.name} (${wc.abbreviation})`,
    value: wc.id
  }));

  const removeCallback = (id: number) => (word_class_ids = word_class_ids.filter((x) => x !== id));
</script>

<form method="post" action={`/language/${$selectedLanguage}/dictionary/edit?/upsert`} use:enhance>
  <div class="grid grid-cols-2 gap-y-10">
    <input type="hidden" name="language_id" value={language_id} />
    <HiddenInput name="id" value={word?.id} />
    <div class="flex flex-col gap-1">
      <TextInput name="word" label="Word" testid="word-input" vertical initialValue={word?.word} />
      {#if pronunciation}
        <Pronunciation content={pronunciation} />
      {/if}
    </div>

    <div>
      <SearchableTextInput
        vertical
        label="Definitions"
        name="newDef"
        testid="definition"
        options={wordLinkOptions}
        callback={(value) => (word_link_ids = [...word_link_ids, value])}
      />
      <ul class="h-36 overflow-y-scroll" data-testid="linked-definitions">
        {#each word_link_ids as link_id}
          <li>
            {composeDefinitionWithHint(globalWordLinks.find(({ id }) => link_id === id))}
            <input type="hidden" value={link_id} name="word_link_ids" />
          </li>
        {/each}
      </ul>
    </div>
    <Select
      name="part_of_speech"
      label="Part of Speech"
      vertical
      required
      options={partOfSpeechOptions}
      initialValue={word?.part_of_speech}
      testid="part-of-speech-select"
    />
    <div>
      <SearchableTextInput
        vertical
        label="Word Classes"
        name="newWordClass"
        options={wordClassOptions}
        callback={(value) => (word_class_ids = [...word_class_ids, value])}
      />
      <ul class="h-20 overflow-y-scroll">
        {#each word_class_ids as id}
          <WordClassTag {id} {globalWordClasses} {removeCallback} />
        {/each}
      </ul>
    </div>
  </div>
  <div class="my-6">
    <Button type="submit" style="action" testid="word-submit-btn">Save</Button>
  </div>
</form>
