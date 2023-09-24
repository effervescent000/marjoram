<script lang="ts">
  import { faStar } from '@fortawesome/free-solid-svg-icons';

  import { goto } from '$app/navigation';

  import LangSelector from './lang-selector.svelte';
  import { ButtonWithIcon } from '$lib';
</script>

<div class="flex items-center gap-1">
  <LangSelector />
  <ButtonWithIcon
    style="action"
    shape="circle"
    icon={faStar}
    onClick={() => goto('/language/edit')}
  />
</div>
