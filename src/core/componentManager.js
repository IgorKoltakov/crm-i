let components = []


class Component {
  constructor() {

  }

  render() {
    const elements = document.querySelectorAll(this.selector);

    if (!elements) throw new Error(`Element with selector ${this.selector} not found`);

    elements.forEach(element => {
      element.innerHTML = this.componentFunction();
      initComponentsByTag(element)
    })
    
  }

  update() {}

} 

export class CRMCreate extends Component {
  constructor(fn) {
    super();
    this.componentFunction = fn;
    this.selector = fn.name;
    this.instance = new fn();

    // Привязываем методы к экземпляру
    Object.getOwnPropertyNames(fn.prototype).forEach(methodName => {
      if (methodName !== 'constructor') {
        this.instance[methodName] = this.instance[methodName].bind(this.instance);
      }
    });
    
    console.log(this.instance);
    

    components.push(this);

    window[this.selector] = this
  }
}



export class CRMCreateApp extends Component {

  constructor(selector, rootComponent) {
    super();
    this.selector = selector;
    this.componentFunction = rootComponent;

    this.render()
  }

}

function initComponentsByTag(root) {
  // Проходим по всем элементам с пользовательскими тегами (например, <Counter>)
  const customTags = root.querySelectorAll('[c]');


  if(customTags.length <= 0) return;
  customTags.forEach(tag => {
    
    const componentName = tag.getAttribute('c');
    const ComponentClass = window[componentName]; // Динамическое обращение к классу компонента

    if (ComponentClass) { 
      const instance = ComponentClass;
      instance.render();
      
    } else {
      console.warn(`Component ${componentName} not found`);
    }
  });
}