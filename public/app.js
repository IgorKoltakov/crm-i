import { CRMCreateApp } from '../src/index.js';
import './Counter.js';
import './Title.js';


new CRMCreateApp('#root', () => {
  return `
    <Counter c="Counter"></Counter>
  `;
});