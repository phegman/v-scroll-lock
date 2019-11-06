import * as path from 'path'
import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    name: 'VShowSlide',
    exports: 'named',
  },
  plugins: [
    alias({
      resolve: ['.js', '.ts'],
      entries: {
        'body-scroll-lock': path.join(
          __dirname,
          process.env.NO_DEP
            ? '/src/noop'
            : '/node_modules/body-scroll-lock/lib/bodyScrollLock.es6'
        ),
      },
    }),
    resolve(),
    typescript({ clean: true }),
    babel({
      presets: ['@babel/preset-env'],
    }),
    terser(),
  ],
}
