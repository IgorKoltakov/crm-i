import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

export default function startServer(rootDir) {
// Для корректной работы с __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Раздача статических файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Настройка раздачи файлов из src с правильным MIME-типом
app.use('/src', express.static(path.join(__dirname, 'src'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Обслуживание всех остальных маршрутов с возвратом index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
}



