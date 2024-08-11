import express from 'express';
import path from 'path';

export default function startServer(rootDir) {
  const app = express();

  // Статические файлы
  app.use(express.static(path.join(rootDir, 'public')));

  // Маршруты
  app.get('*', (req, res) => {
    res.sendFile(path.join(rootDir, 'public', 'index.html'));
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}