<script lang="ts">
  import Heading from '$lib/components/common/heading.svelte';
  import WordLinkWrapper from '$lib/components/word-links/word-link-wrapper.svelte';

  export let data;
</script>

<Heading>
  <span>Word Links</span>
</Heading>

<WordLinkWrapper links={data.wordLinks} />
