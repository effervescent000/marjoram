export const PARTS_OF_SPEECH = {
  adj: 'adjective',
  adp: 'adposition',
  adv: 'adverb',
  affix: 'affix',
  aux: 'auxiliary',
  conj: 'conjunction',
  det: 'determiner',
  noun: 'noun',
  num: 'numeral',
  particle: 'particle',
  pro: 'pronoun',
  verb: 'verb'
};

export const partOfSpeechOptions = Object.values(PARTS_OF_SPEECH).map((value) => ({
  label: value,
  value
}));
