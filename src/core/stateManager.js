// Простая реализация функции useState
let componentInstances = window.componentInstances;

export function useState(initialValue) {
  const currentComponent = componentInstances.get('current');
  let state = initialValue;

  const setState = (newValue) => {
    state = newValue;
    if (currentComponent) {
      currentComponent.update(); // Обновляем компонент
    }
  };

  return [state, setState];
}