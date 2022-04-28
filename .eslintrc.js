module.exports = {
  'root': true,
  'env': {
    'node': true,
    'es6': true,
    'browser': true,
    'jest': true
  },
  'globals': {
    'defineProps': 'readonly',
    'defineEmits': 'readonly',
    'defineExpose': 'readonly',
    'withDefaults': 'readonly'
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended'
  ],
  'parserOptions': {
    'requireConfigFile': false,
    'ecmaFeatures': {
      'legacyDecorators': true
    },
    'parser': '@babel/eslint-parser'
  },
  'rules': {
    'vue/multi-word-component-names': 0,
    'vue/no-unused-components': 1,
    'vue/no-mutating-props': 0,
    'vue/script-setup-uses-vars': 'error',
    'vue/v-on-event-hyphenation': ['warn', 'always', {
      'autofix': true
    }],
    'vue/valid-template-root': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'no-unused-vars': 1,
    'no-undef': 1,
    'no-var': 'error',
    'no-trailing-spaces': 2,
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'no-irregular-whitespace': 2,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'eol-last': 2,
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'prefer-const': 2,
    'camelcase': ['error', {
      'properties': 'never'
    }],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'semi': ['error', 'never'],
    'space-before-function-paren': 'error'
  },
  'settings': {
    'import/parsers': {
      'espree': [
        '.js',
        '.jsx'
      ]
    }
  }
}
