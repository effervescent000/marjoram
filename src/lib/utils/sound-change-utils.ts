export const appendRuleHeader = (rules: string) => {
  const splitRules = rules.split('\n');
  if (splitRules.length > 0) {
    const firstRule = splitRules[0];
    if (!firstRule.match(/(?:\w-?)+:/)) {
      splitRules.unshift('Deromanizer:');
    }
  }
  return splitRules.join('\n');
};
