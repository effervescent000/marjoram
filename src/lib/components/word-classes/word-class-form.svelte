<script lang="ts">
  import type { WordClass } from '$lib/types/grammar-types';
  import { createForm } from 'felte';
  import Button from '../common/button.svelte';
  import WordClassItem from './word-class-item.svelte';

  // PROPS
  export let wordClasses: WordClass[];

  // LOGIC
  const { form, addField, unsetField, data } = createForm<{ classes: Partial<WordClass>[] }>({
    initialValues: {
      classes: wordClasses
    }
  });

  const addCallback = () => addField('classes', {});
  const removeCallback = (index: number) => unsetField(`classes.${index}`);
</script>

<form use:form>
  <div class="grid grid-cols-4 w-fit gap-2 justify-items-center">
    {#each $data.classes as wordClass, index}
      <WordClassItem {wordClass} {index} {removeCallback} />
    {/each}
  </div>
  <div>
    <Button onClick={addCallback}>Add new</Button>
    <Button type="submit" style="action">Save</Button>
  </div>
</form>
