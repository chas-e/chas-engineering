import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    eslintConfigPrettier,
    ...eslintPluginAstro.configs['flat/recommended'],
    {
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
        },
    },
];