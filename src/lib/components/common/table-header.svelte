<script lang="ts">
  export let headers: string[];
</script>

{#each headers as header}
  <span class="font-bold">{header}</span>
{/each}
