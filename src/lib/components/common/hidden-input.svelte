<script lang="ts">
  export let name: string;
  export let value: string | number | undefined = undefined;
</script>

{#if value}
  <input type="hidden" {name} {value} />
{/if}
