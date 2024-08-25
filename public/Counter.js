import { CRMCreate } from '../src/index.js';
import './Title.js';

// Функциональный компонент
const Counter = new CRMCreate(function Counter() {
  // Создаем локальное состояние
  // const [count, setCount] = useState(0);
  // const [input, setInput] = useState('');

  this.increment = function increment() {
    // setCount(count + 1);
  }

  this.handleInput = function handleInput(event) {
    // setInput(event.target.value);
  }

  // Возвращаем разметку с атрибутами для привязки событий
  return `
    <div>
      <p>Count: ${0}</p>
      <p>Input: ${''}</p>
      <button data-on-click="increment">Increment</button>
      <input type="text" data-on-input="handleInput" />
      <MyTitle c="MyTitle"></MyTitle>
    </div>
  `;
});

export default Counter