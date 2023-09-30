<script lang="ts">
  export let name: string;
  export let label = '';
  export let initialValue: number | undefined | null = undefined;
  export let required = false;
  export let options: { value: number; label: string }[];
  export let callback: (value: number) => void;
  export let testid: string | undefined = undefined;

  export let vertical = false;
  let expanded = false;
  let value: string = options.find(({ value }) => value === initialValue)?.label || '';
  let storedValue: number | undefined = options.find(({ value }) => value === initialValue)?.value;

  const onClick = (opt: { value: number; label: string }) => {
    value = '';
    storedValue = opt.value;
    callback(opt.value);
  };

  $: {
    if (value.length >= 2) {
      expanded = true;
    }
  }

  $: filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(value.toLowerCase())
  );

  $: {
    if (storedValue) {
      expanded = false;
    }
  }
</script>

<label class={`relative ${vertical ? 'flex flex-col w-min' : 'flex gap-2 justify-between'}`}>
  <input type="hidden" {name} value={storedValue} />
  {#if label}
    <span>{label}</span>
  {/if}
  <div>
    <input
      {required}
      type="text"
      class="border-accent-primary border border-solid rounded-sm disabled:brightness-75"
      data-testid={`${testid}-input`}
      bind:value
      on:focusout={() => setTimeout(() => (expanded = false), 200)}
    />
    <ul
      data-testid={`${testid}-results`}
      class={`absolute max-h-32 w-52 overflow-y-scroll bg-bg-secondary z-10 border-accent-secondary border border-solid ${
        !expanded && 'hidden'
      }`}
    >
      {#each filteredOptions as opt}
        <li class="w-full" on:click={() => onClick(opt)} on:keypress={() => onClick(opt)} role="">
          {opt.label}
        </li>
      {/each}
    </ul>
  </div>
</label>
