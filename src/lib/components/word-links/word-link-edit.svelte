<script lang="ts">
  import type { WordLink } from '$lib/types/words-types';

  import { PARTS_OF_SPEECH } from '$lib/constants/word-constants';

  import { TextInput } from '$lib';
  import Select from '../common/select.svelte';
  import Button from '../common/button.svelte';

  export let link: WordLink | undefined = undefined;

  const options = Object.values(PARTS_OF_SPEECH).map((value) => ({ label: value, value }));
</script>

<form method="post" action="?/upsert">
  <div class="grid grid-cols-2 gap-5 my-5">
    <TextInput
      vertical
      name="definition"
      label="Definition"
      required
      initialValue={link?.definition}
    />
    <TextInput vertical name="hint" label="Hint" initialValue={link?.hint} />
    <Select vertical label="Part of speech" {options} initialValue={link?.part_of_speech} />
  </div>
  <Button type="submit">Save</Button>
</form>
