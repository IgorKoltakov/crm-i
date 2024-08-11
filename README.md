// Structure framework
my-framework/
├── src/
│   ├── core/
│   │   ├── stateManager.js       # Управление состоянием
│   │   ├── componentManager.js   # Управление компонентами
│   │   ├── renderEngine.js       # Рендеринг компонентов
│   │   ├── router.js             # Управление роутингом
│   │   └── server.js             # Встроенный сервер (Express.js)
│   ├── modules/
│   │   ├── router.js             # Пример модуля для роутинга
│   │   └── formHandler.js        # Пример модуля для работы с формами
│   ├── vdom/
│   │   ├── createElement.js      # Создание виртуальных элементов
│   │   └── diff.js               # Алгоритм диффинга для оптимизации рендеринга
│   ├── cli/
│   │   ├── index.js              # Основная логика CLI
│   │   ├── commands/             # Команды для CLI
│   │   └── templates/            # Шаблоны для генерации проектов
│   ├── index.js                  # Точка входа в фреймворк
│   └── utils/                    # Утилиты и вспомогательные функции
├── tests/
│   ├── core/
│   ├── modules/
│   └── vdom/
├── public/
│   └── index.html                # Тестовый HTML для разработки
├── vite.config.js                # Конфигурация Vite для разработки
├── package.json                  # Конфигурация npm
├── README.md                     # Документация
└── .gitignore                    # Игнорируемые файлы Git



// Structure app
my-app/
├── src/
│   ├── components/               # Компоненты приложения
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── store/                    # Управление состоянием
│   │   └── store.js
│   ├── router/                   # Маршрутизация
│   │   └── index.js
│   ├── pages/                    # Страницы приложения
│   │   ├── Home.js
│   │   └── About.js
│   ├── App.js                    # Главный компонент приложения
│   └── main.js                   # Точка входа приложения
├── public/
│   ├── index.html                # Основной HTML файл
│   └── assets/                   # Статические файлы (изображения, стили)
├── vite.config.js                # Конфигурация Vite
├── package.json                  # Зависимости и скрипты
└── .gitignore                    # Игнорируемые файлы Git
