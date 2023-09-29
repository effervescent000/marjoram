<script lang="ts">
  import { page } from '$app/stores';

  import type { Phone } from '$lib/types/phonology-types';

  import { QUALITIES } from '$lib/constants/phonology-constants';

  import { HiddenInput, Select } from '$lib';
  import TextInput from '../common/text-input.svelte';

  // PROPS
  export let phone: Phone;
  export let arrayLocation: string;
  export let editing: boolean;
</script>

<HiddenInput name={arrayLocation + '.id'} value={phone.id} />
<HiddenInput
  name={arrayLocation + '.language_id'}
  value={phone.language_id || $page.params.language_id}
/>
<HiddenInput name={arrayLocation + '.base_phone'} value={phone.base_phone} />
<div class="flex justify-around">
  <TextInput
    name={arrayLocation + '.composed_phone'}
    initialValue={phone.composed_phone}
    style="secret"
    disabled
    size="xs"
    styleAppend="text-center"
  />
  <TextInput
    name={arrayLocation + '.graph'}
    initialValue={phone.graph || phone.composed_phone}
    style={!editing ? 'secret' : 'plain'}
    disabled={!editing}
    size="xs"
    styleAppend="text-center"
  />
</div>
<Select
  name={arrayLocation + '.quality'}
  disabled={!editing}
  initialValue={phone.quality}
  options={Object.values(QUALITIES).map((val) => ({ label: val, value: val }))}
  style={!editing ? 'secret' : 'plain'}
/>
