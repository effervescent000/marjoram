<script lang="ts">
  import { faX } from '@fortawesome/free-solid-svg-icons';

  import ButtonWithIcon from '../common/button-with-icon.svelte';
  import HiddenInput from '../common/hidden-input.svelte';

  export let base_phone: string;
  export let removeCallback: () => void;
  export let index: number;
</script>

<div class="flex items-center relative w-[3.25rem]">
  <HiddenInput name="phones.{index}" value={base_phone} />
  <span class="bg-accent-primary border-accent-secondary border border-solid p-1 h-min w-full">
    {base_phone}
  </span>

  <ButtonWithIcon
    icon={faX}
    onClick={removeCallback}
    style="warning"
    styleAppend="absolute right-1"
  />
</div>
