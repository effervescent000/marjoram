<script lang="ts">
  import { createForm } from 'felte';

  import { invalidateAll } from '$app/navigation';

  import type { Phone } from '$lib/types/phonology-types';

  import { POST } from '$lib/utils/api-service';

  import PhonologyListItem from './phonology-list-item.svelte';
  import Button from '../common/button.svelte';

  export let phones: Phone[];

  export let token: string = '';

  const { form } = createForm({
    onSubmit: async (values) => {
      await POST('/phonology', { token, body: values.phonology });
    },
    onSuccess: async () => {
      await invalidateAll();
    }
  });
</script>

<form use:form>
  <div class="grid grid-cols-2 w-fit">
    {#each phones as phone, i}
      <PhonologyListItem {phone} arrayLocation="phonology.{i}" />
    {/each}
  </div>
  <Button type="submit" style="action">Save</Button>
</form>