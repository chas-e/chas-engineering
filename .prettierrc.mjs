export default {
    plugins: ['prettier-plugin-svelte', 'prettier-plugin-astro'],
    overrides: [
        {
            files: '*.svelte',
            options: {
                parser: 'svelte',
            },
        },
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    printWidth: 120,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
};
