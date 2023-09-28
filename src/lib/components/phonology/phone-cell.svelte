<script lang="ts">
  export let base_phone: string;
  export let already_used: boolean;
  export let addCallback: () => void;
  export let removeCallback: (index: number) => void;
  export let selectedPhonesLookup: Record<string, number>;

  $: index = selectedPhonesLookup[base_phone];

  $: selected = index === 0 ? true : !!index;

  $: callback = () => {
    if (already_used) return () => {};
    if (selected) return removeCallback(index);
    return addCallback();
  };

  let styles = '';

  $: {
    const styleArray = [];
    if (already_used) {
      styleArray.push('brightness-75');
    } else if (selected) {
      styleArray.push('bg-action-primary');
    }
    styles = styleArray.join(' ');
  }
</script>

<td class={styles} on:click={callback}>
  {base_phone}
</td>
