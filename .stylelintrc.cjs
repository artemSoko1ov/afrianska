module.exports = {
  extends: ['@delement/stylelint-config-master'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'declaration-property-value-no-unknown': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/function-no-unknown': [true, { ignoreFunctions: ['fluid'] }],
  },
}
