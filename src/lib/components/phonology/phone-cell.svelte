<script lang="ts">
  export let base_phone: string;
  export let already_used: boolean;
  export let addCallback: () => void;
  export let removeCallback: () => void;
  export let selectedPhonesLookup: Record<string, number>;

  $: callback = () => {
    addCallback();
  };

  $: index = selectedPhonesLookup[base_phone];

  $: selected = index === 0 ? true : !!index;

  const getStyles = () => {
    const styles = [];
    if (already_used) {
      styles.push('brightness-75');
    } else if (selected) {
      styles.push('bg-action-primary');
    }
    return styles.join(' ');
  };
</script>

<td class={getStyles()} on:click={callback}>
  {base_phone}
</td>
