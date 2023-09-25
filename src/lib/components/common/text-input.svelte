<script lang="ts">
  export let name: string;
  export let label = '';
  export let initialValue: string | undefined | null = undefined;
  export let required = false;
  export let disabled = false;
  export let vertical = false;

  let value = initialValue;
</script>

<label class={vertical ? 'flex flex-col w-min' : 'flex gap-2 justify-between'}>
  {#if label}
    <span>{label}</span>
  {/if}
  <input
    {disabled}
    class="border-accent-primary border border-solid rounded-sm disabled:brightness-75"
    type="text"
    {name}
    bind:value
    {required}
  />
</label>
