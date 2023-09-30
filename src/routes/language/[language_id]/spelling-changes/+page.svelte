<script lang="ts">
  import { Heading } from '$lib';
  import SpellingForm from '$lib/components/sound-changes/spelling-form.svelte';

  // PROPS
  export let data;
</script>

<Heading>
  <span>Pronunciation Estimation Rules</span>
</Heading>

<SpellingForm spellingRules={data.spellingRules} />
