<script lang="ts">
  import { createForm } from 'felte';
  import { page } from '$app/stores';

  import type { WordClass } from '$lib/types/grammar-types';

  import { WordClassSchema } from '$lib/schema/grammar-schema';

  import { POST } from '$lib/utils/api-service';

  import Button from '../common/button.svelte';
  import WordClassItem from './word-class-item.svelte';
  import { TableHeader } from '$lib';
  import LilPadder from '../common/lil-padder.svelte';

  // PROPS
  export let wordClasses: WordClass[];
  export let token: string | undefined = undefined;

  // LOGIC
  const { form, addField, unsetField, data } = createForm<{ classes: Partial<WordClass>[] }>({
    initialValues: {
      classes: wordClasses
    },
    onSubmit: async (values, { setData }) => {
      const response: unknown[] = await POST('/word_classes', {
        token,
        body: values.classes.map((x) => ({ ...x, language_id: $page.params.language_id }))
      });
      const wordClasses = response.map((x) => WordClassSchema.parse(x));
      setData({ classes: wordClasses });
    }
  });

  const addCallback = () => addField('classes', {});
  const removeCallback = (index: number) => unsetField(`classes.${index}`);
</script>

<form use:form>
  <div class="grid grid-cols-4 w-fit gap-2 justify-items-center items-center">
    {#if $data.classes.length}
      <TableHeader headers={['Class name', 'Abbreviation', 'Part of speech', '']} />
      {#each $data.classes as wordClass, index}
        <WordClassItem {wordClass} {index} {removeCallback} />
      {/each}
    {/if}
  </div>
  <LilPadder size="xs" />
  <div>
    <Button onClick={addCallback}>Add new</Button>
    <Button type="submit" style="action">Save</Button>
  </div>
</form>
