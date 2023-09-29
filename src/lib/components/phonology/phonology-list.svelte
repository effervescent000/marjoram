<script lang="ts">
  import { createForm } from 'felte';

  import { invalidateAll } from '$app/navigation';

  import type { Phone } from '$lib/types/phonology-types';

  import { POST } from '$lib/utils/api-service';
  import { nullifyEmptyStrings } from '$lib/utils/general-utils';

  import Button from '../common/button.svelte';
  import PhonologyListItem from './phonology-list-item.svelte';
  import { TableHeader } from '$lib';

  // PROPS
  export let phones: Array<Partial<Phone>>;
  export let token: string = '';

  // STATE
  let editing = false;

  // LOGIC
  const { form, reset, addField, unsetField, data } = createForm({
    onSubmit: async (values) => {
      await POST('/phonology', {
        token,
        body: [
          {
            phonology: values.phonology.map((value) => nullifyEmptyStrings(value)),
            mode: 'replace'
          }
        ]
      });
    },
    onSuccess: async () => {
      await invalidateAll();
      editing = false;
    },
    initialValues: {
      phonology: [...phones]
    }
  });

  const invertEditing = () => {
    editing = !editing;
    if (editing) {
      reset();
    }
  };

  const addCallback = (index: number, values: Partial<Phone>) => {
    const { id, graph, quality, ...newValues } = values;
    addField('phonology', newValues, index + 1);
  };
  const removeCallback = (index: number) => unsetField(`phonology.${index}`);
</script>

<Button onClick={invertEditing}>
  {#if editing}
    Cancel editing
  {:else}
    Edit phones
  {/if}
</Button>
<form use:form>
  <div class="grid grid-cols-3 w-fit gap-x-4">
    <TableHeader headers={['Sound / Graph', 'Quality', '']} />
    {#each $data.phonology as phone, i}
      <PhonologyListItem {phone} {editing} index={i} {addCallback} {removeCallback} />
    {/each}
  </div>
  {#if editing}
    <Button type="submit" style="action">Save</Button>
  {/if}
</form>
