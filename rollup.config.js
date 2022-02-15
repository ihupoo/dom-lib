import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import json from '@rollup/plugin-json'
import del from 'rollup-plugin-delete'

const rollupConfig = [
	{
		input: 'src/index.ts',
		output: [
			{
				format: 'esm',
				preserveModules: true,
				preserveModulesRoot: 'src',
				dir: 'dist/esm',
			},
			{
				dir: 'dist/cjs',
				format: 'cjs',
				preserveModules: true,
				preserveModulesRoot: 'src',
				exports: 'named',
			},
		],
		plugins: [
			del({ targets: 'dist/*' }),
			typescript(),
			resolve(),
			commonjs(),
			babel({
				extensions: ['.ts', '.tsx'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/**'],
			}),
			strip(),
			json(),
		],
		external: [/@babel\/runtime/],
	},
]

export default rollupConfig
