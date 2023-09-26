<script lang="ts">
  import { enhance } from '$app/forms';

  import type { WordLink } from '$lib/types/words-types';

  import { PARTS_OF_SPEECH } from '$lib/constants/word-constants';

  import { TextInput } from '$lib';
  import Select from '../common/select.svelte';
  import Button from '../common/button.svelte';

  export let link: WordLink | undefined = undefined;
  export let disableEditMode: () => void;

  const options = Object.values(PARTS_OF_SPEECH).map((value) => ({ label: value, value }));
</script>

<form
  method="post"
  action="?/upsert"
  use:enhance={() => {
    return async ({ update }) => {
      await update();
      disableEditMode();
    };
  }}
>
  <div class="grid grid-cols-2 gap-5 my-5">
    {#if link?.id}
      <input type="hidden" name="id" value={link?.id} />
    {/if}
    <TextInput
      vertical
      name="definition"
      label="Definition"
      required
      initialValue={link?.definition}
    />
    <TextInput vertical name="hint" label="Hint" initialValue={link?.hint} />
    <Select
      name="part_of_speech"
      vertical
      label="Part of speech"
      {options}
      initialValue={link?.part_of_speech}
    />
  </div>
  <Button type="submit">Save</Button>
</form>
