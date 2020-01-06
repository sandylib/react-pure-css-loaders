import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

const dist = 'dist'
const bundle = 'bundle'

const production = !process.env.ROLLUP_WATCH

module.exports = {
  input: 'src/index.js',
  external: ['react', 'prop-types'],
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm'
    },
    {
      name: 'ReactPureCssLoaders',
      file: `${dist}/${bundle}.umd.js`,
      globals: {
        react: 'React',
        'prop-types': 'PropTypes'
      },
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      extract: 'dist/style.css'
    }),
    production && terser()
  ]
}
