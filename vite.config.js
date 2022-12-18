import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import styleImport from 'vite-plugin-style-import';
// import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#13c2c2' },
      },
      // ....
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
  plugins: [
    // viteSvgr(),
    react(),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
});
