<script lang="ts">
  import type { Phone } from '$lib/types/phonology-types';

  import { QUALITIES } from '$lib/constants/phonology-constants';

  import { HiddenInput, Select } from '$lib';
  import TextInput from '../common/text-input.svelte';

  export let phone: Phone;
  export let arrayLocation: string;
</script>

<HiddenInput name={arrayLocation + '.id'} value={phone.id} />
<HiddenInput name={arrayLocation + '.base_phone'} value={phone.base_phone} />
<div class="flex">
  <TextInput
    name={arrayLocation + '.composed_phone'}
    initialValue={phone.composed_phone}
    style="secret"
    disabled
    size="xs"
  />
  <TextInput
    name={arrayLocation + '.graph'}
    initialValue={phone.graph || phone.composed_phone}
    style="secret"
    disabled
    size="xs"
  />
</div>
<Select
  name={arrayLocation + '.quality'}
  initialValue={phone.quality}
  options={Object.values(QUALITIES).map((val) => ({ label: val, value: val }))}
  style="secret"
/>
