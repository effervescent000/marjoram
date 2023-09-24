<script lang="ts">
  import { faStar } from '@fortawesome/free-solid-svg-icons';

  import LangSelector from './lang-selector.svelte';
  import ButtonWithIcon from '../common/button-with-icon.svelte';
</script>

<div class="flex items-center gap-1">
  <LangSelector />
  <ButtonWithIcon style="action" shape="circle" icon={faStar} />
</div>
