import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/SocketProvider.js',
  output: [
    {
      file: 'dist/SocketProvider.js',
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
  ],
  plugins: [
    external(),
    resolve({
      browser: true,
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ]
};
