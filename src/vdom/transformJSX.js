import { createVNode } from './index.js'; // Импорт функции для создания виртуальных узлов

export function transformJSX(jsCode) {
  // Пример базового парсинга JSX (работает с простыми тегами)
  const tagMatch = jsCode.match(/<(\w+)([^>]*)>(.*?)<\/\1>/);

  if (!tagMatch) {
    throw new Error('Invalid JSX syntax');
  }

  const [, tag, rawProps, children] = tagMatch;

  // Разбор пропсов (атрибутов)
  const props = {};
  rawProps.trim().split(/\s+/).forEach(prop => {
    const [key, value] = prop.split('=');
    props[key] = value ? value.replace(/['"]/g, '') : true; // Убираем кавычки
  });

  // Рекурсивная поддержка вложенных JSX-структур может быть добавлена здесь

  return createVNode(tag, props, [children.trim()]);
}
