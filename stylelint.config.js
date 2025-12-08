/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'color-function-alias-notation': null,
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'selector-class-pattern': null,
    'custom-property-empty-line-before': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    "scss/dollar-variable-pattern": "^[a-zA-Z0-9_-]+$",
    'scss/at-rule-no-unknown': true,
  }
};
