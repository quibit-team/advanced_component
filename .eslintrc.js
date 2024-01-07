const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
)

module.exports = {
	extends: ['react-app', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error', prettierOptions],
		rules: {
			'no-unused-vars': 'on',
			'@typescript-eslint/no-unused-vars': ['error'],
		},
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: { 'prettier/prettier': ['warn', prettierOptions] },
		},
	],
}
