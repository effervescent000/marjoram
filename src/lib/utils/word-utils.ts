import type { WordLink } from '$lib/types/words-types';

export const composeDefinitionWithHint = (wordLink?: WordLink) => {
  if (!wordLink) return '';
  return `${wordLink.definition}${wordLink.hint ? ` (${wordLink.hint})` : ''}`;
};
