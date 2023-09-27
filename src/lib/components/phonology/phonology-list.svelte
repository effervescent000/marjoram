<script lang="ts">
  import { createForm } from 'felte';

  import type { Phone } from '$lib/types/phonology-types';

  import PhonologyListItem from './phonology-list-item.svelte';

  export let phones: Phone[];

  const { form } = createForm();
</script>

<form use:form>
  <div class="grid grid-cols-2 w-fit">
    {#each phones as phone, i}
      <PhonologyListItem {phone} arrayLocation="phonology.{i}" />
    {/each}
  </div>
</form>
