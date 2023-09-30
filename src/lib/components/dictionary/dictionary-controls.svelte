<script lang="ts">
  import { goto } from '$app/navigation';

  import { selectedLanguage } from '$lib/stores/language-store';
  import { wordFiltersStore } from '$lib/stores/word-stores';

  import Button from '../common/button.svelte';
  import TextInput from '../common/text-input.svelte';
</script>

<div class="flex items-end gap-10">
  <form>
    <div class="flex items-end gap-2">
      <TextInput
        name="content"
        label="Search by definition"
        vertical
        onInput={(event) =>
          wordFiltersStore.update((oldValue) => ({ ...oldValue, definition: event.target?.value }))}
      />
      <Button type="reset" style="warning" onClick={() => wordFiltersStore.set({})}
        >Reset filters</Button
      >
    </div>
  </form>
  <Button
    testid="add-word-btn"
    style="action"
    onClick={() => goto(`/language/${$selectedLanguage}/dictionary/edit`)}
  >
    Add new word
  </Button>
</div>
