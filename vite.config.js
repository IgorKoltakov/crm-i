import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';

// Настройка Vite без React, с поддержкой Babel
export default defineConfig({
  plugins: [
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'], // Обрабатываем как .js, так и .jsx файлы
      include: ['./public/**/*'], // Включаем папку public для обработки
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-react-jsx', { pragma: 'createVNode' }] // Используем вашу функцию
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Расширение для .jsx
  },
  server: {
    mimeTypes: {
      '.jsx': 'application/javascript', // Явно указываем MIME-тип для .jsx
    },
    watch: {
      usePolling: true, // Для корректного отслеживания изменений файлов
    },
  },
  build: {
    lib: {
      entry: './src/index.js',
      name: 'crm-i',
      fileName: (format) => `crm-i.${format}.js`,
    },
  }
});
