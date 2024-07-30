import js from '@eslint/js'
import ts from 'typescript-eslint'
import svelte, { rules } from 'eslint-plugin-svelte'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.svelte', '**/*.ts'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/'],
	},
	{
		rules: {
			eqeqeq: 'error',
			'no-magic-numbers': [
				'error',
				{
					ignore: [-1, 0, 1, 2, 10, 100, 1000],
					ignoreDefaultValues: true,
					ignoreClassFieldInitialValues: true,
				},
			],
			'prefer-const': 'error',
		},
	},
]
