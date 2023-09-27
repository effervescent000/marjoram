<script lang="ts">
  import { enhance } from '$app/forms';

  import type { Word, WordLink } from '$lib/types/words-types.js';

  import { partOfSpeechOptions } from '$lib/constants/word-constants.js';

  import { composeDefinitionWithHint } from '$lib/utils/word-utils.js';

  import SearchableTextInput from '$lib/components/common/searchable-text-input.svelte';
  import TextInput from '$lib/components/common/text-input.svelte';
  import { Select } from '$lib';
  import Button from '../common/button.svelte';

  export let word: Word | undefined = undefined;
  export let globalWordLinks: WordLink[];
  export let language_id: number;

  let word_links = word?.word_links.map((link) => link.id) || [];

  const wordLinkOptions = globalWordLinks.map((link) => ({
    label: composeDefinitionWithHint(link),
    value: link.id
  }));
</script>

<form method="post" action="?/upsert" use:enhance>
  <div class="grid grid-cols-2 gap-y-10">
    <input type="hidden" name="language_id" value={language_id} />
    <input type="hidden" name="id" value={word?.id} />
    <TextInput name="word" label="Word" vertical initialValue={word?.word} />
    <div>
      <SearchableTextInput
        vertical
        label="Definitions"
        name="newDef"
        options={wordLinkOptions}
        callback={(value) => (word_links = [...word_links, value])}
      />
      <ul class="h-36 overflow-y-scroll">
        {#each word_links as link_id}
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
    />
  </div>
  <div class="my-6">
    <Button type="submit" style="action">Save</Button>
  </div>
</form>
