<script lang="ts">
  export let name: string;
  export let label = '';
  export let initialValue: string | undefined = undefined;
  export let required = false;

  let value = initialValue;
</script>

<label class="flex gap-2 justify-between">
  {#if label}
    <span>{label}</span>
  {/if}
  <input
    class="border-accent-primary border border-solid rounded-sm"
    type="text"
    {name}
    bind:value
    {required}
  />
</label>
