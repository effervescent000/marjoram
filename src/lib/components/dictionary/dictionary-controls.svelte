<script lang="ts">
  import { goto } from '$app/navigation';
  import { selectedLanguage } from '$lib/stores/language-store';
  import { wordFilters } from '$lib/stores/word-stores';
  import Button from '../common/button.svelte';

  import TextInput from '../common/text-input.svelte';
</script>

<div class="flex items-end gap-10">
  <TextInput
    name="content"
    label="Search"
    vertical
    onInput={(event) =>
      wordFilters.update((oldValue) => ({ ...oldValue, definition: event.target?.value }))}
  />
  <Button
    testid="add-word-btn"
    style="action"
    onClick={() => goto(`/language/${$selectedLanguage}/dictionary/edit`)}
  >
    Add new word
  </Button>
</div>
