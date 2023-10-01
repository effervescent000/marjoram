<script lang="ts">
  import { faX } from '@fortawesome/free-solid-svg-icons';

  import type { WordClass } from '$lib/types/grammar-types';

  import { partOfSpeechOptions } from '$lib/constants/word-constants';

  import { HiddenInput } from '$lib';
  import TextInput from '../common/text-input.svelte';
  import Select from '../common/select.svelte';
  import ButtonWithIcon from '../common/button-with-icon.svelte';

  export let wordClass: Partial<WordClass>;
  export let index: number;
  export let removeCallback: (index: number) => void;

  $: prefix = `classes.${index}.`;
</script>

<HiddenInput name={prefix + 'id'} value={wordClass.id} />
<TextInput required name={prefix + 'name'} initialValue={wordClass.name} />
<TextInput required size="s" name={prefix + 'abbreviation'} initialValue={wordClass.abbreviation} />
<Select
  required
  name={prefix + 'part_of_speech'}
  initialValue={wordClass.part_of_speech}
  options={partOfSpeechOptions}
/>
<div>
  <ButtonWithIcon style="warning" icon={faX} onClick={() => removeCallback(index)} />
</div>
