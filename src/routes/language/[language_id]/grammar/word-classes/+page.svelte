<script lang="ts">
  import { Heading } from '$lib';
  import WordClassForm from '$lib/components/word-classes/word-class-form.svelte';

  // PROPS
  export let data;
</script>

<Heading>
  <span>Word Classes</span>
</Heading>

<WordClassForm wordClasses={data.wordClasses} />
