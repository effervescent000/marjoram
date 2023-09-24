<script lang="ts">
  import { faStar } from '@fortawesome/free-solid-svg-icons';

  import { goto } from '$app/navigation';

  import ButtonWithIcon from '../common/button-with-icon.svelte';
  import LangSelector from './lang-selector.svelte';
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
