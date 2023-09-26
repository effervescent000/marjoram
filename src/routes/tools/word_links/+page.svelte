<script lang="ts">
  import type { WordLink } from '$lib/types/words-types.js';

  import Button from '$lib/components/common/button.svelte';
  import Heading from '$lib/components/common/heading.svelte';
  import TextInput from '$lib/components/common/text-input.svelte';
  import WordLinkEdit from '$lib/components/word-links/word-link-edit.svelte';
  import WordLinkWrapper from '$lib/components/word-links/word-link-wrapper.svelte';

  export let data;

  let editMode = false;
  let selectedWordLink: WordLink | undefined = undefined;
  let searchTerm = '';
</script>

<Heading>
  <span>Word Links</span>
</Heading>

<div class="my-5">
  {#if editMode}
    <WordLinkEdit link={selectedWordLink} disableEditMode={() => (editMode = false)} />
  {:else}
    <div class="flex justify-between">
      <div>
        <TextInput
          name="search"
          vertical
          label="Search"
          onInput={(event) => (searchTerm = event?.target?.value)}
        />
      </div>
      <Button onClick={() => (editMode = true)}>Add a new word link</Button>
    </div>
  {/if}
</div>

<WordLinkWrapper
  links={searchTerm
    ? data.wordLinks.filter((wordLink) => wordLink.definition.includes(searchTerm))
    : data.wordLinks}
  selectWordLink={(link) => {
    selectedWordLink = link;
    editMode = true;
  }}
/>
