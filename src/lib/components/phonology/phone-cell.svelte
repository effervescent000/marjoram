<script lang="ts">
  export let base_phone: string;
  export let already_used: boolean;
  export let addCallback: (phone: string) => void;
  export let removeCallback: (index: number) => void;
  export let selectedPhonesLookup: Record<string, number>;

  $: index = selectedPhonesLookup[base_phone];

  $: selected = index === 0 ? true : !!index;

  $: callback = () => {
    if (already_used) return () => {};
    if (selected) return removeCallback(index);
    return addCallback(base_phone);
  };

  let styles = '';

  $: {
    const styleArray = ['min-w-[1.25rem] text-center'];
    if (already_used) {
      styleArray.push('bg-bg-secondary');
    } else if (selected) {
      styleArray.push('bg-action-primary');
    } else {
      styleArray.push('border-accent-primary border border-solid');
    }
    styles = styleArray.join(' ');
  }
</script>

<td class={styles} on:click={callback}>
  {base_phone}
</td>
