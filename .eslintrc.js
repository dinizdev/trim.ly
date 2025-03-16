module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // ou 'plugin:vue/vue3-recommended' para regras mais rigorosas
    'eslint:recommended',
    'plugin:prettier/recommended', // Ativa Prettier dentro do ESLint
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // Regras customizadas (se necessário)
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off', // Exemplo de desabilitar uma regra do Vue
  },
}
