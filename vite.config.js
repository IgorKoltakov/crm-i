import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'MyFramework',
      fileName: (format) => `my-framework.${format}.js`,
    },
  },
});
