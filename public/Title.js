import { CRMCreate } from '../src/index.js';

// Функциональный компонент
const MyTitle = new CRMCreate(function MyTitle() {

  // Возвращаем разметку с атрибутами для привязки событий
  return `
    <div>
      <h1>Tite</h1>
    </div>
  `;
});

export default MyTitle