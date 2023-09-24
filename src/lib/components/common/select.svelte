<script lang="ts">
  export let label = '';
  export let options: Record<string, string | number>[];
  export let onChange: (() => void) | undefined = undefined;
</script>

<label>
  {#if label}
    <span>{label}</span>
  {/if}
  <select class="bg-bg-secondary" on:change={onChange}>
    {#each options as opt}
      <option value={opt.value}>{opt.label}</option>
    {/each}
  </select>
</label>
