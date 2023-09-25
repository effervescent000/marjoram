<script lang="ts">
  export let label = '';
  export let options: Record<string, string | number>[];
  export let onChange: (() => void) | undefined = undefined;
  export let initialValue: string | number | undefined = undefined;
  export let vertical = false;
  export let value = initialValue;
</script>

<label class={vertical ? 'flex flex-col w-min' : 'flex justify-between'}>
  {#if label}
    <span>{label}</span>
  {/if}
  <select bind:value class="bg-bg-secondary p-0.5 rounded-sm min-w-[11rem]" on:change={onChange}>
    {#each options as opt}
      <option value={opt.value}>{opt.label}</option>
    {/each}
  </select>
</label>
