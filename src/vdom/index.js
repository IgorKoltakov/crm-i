function createVNode(tag, props, children) {
  return {tag, props, children};
}

function mount(vnode, container) {
  const el = document.createElement(vnode);

  for (const [key, value] in vnode.props) {
    el.setAttribute(key, value);
  }

  if(typeof vnode.children === 'string') {
    el.textContent = vnode.children;
  } else {
    vnode.children.forEach((child) => {
      mount(child, el);
    })
  }


  container.appendChild(el);

  vnode.$el = el;

}


function unmount(vnode) {
  vnode.$el.parentNode.removeChild(vnode.$el);
}


function patch(oldVNode, newVNode) {
  if (!oldVNode) {
    mount(newVNode, newVNode.$el.parentNode);
  }

  if (!newVNode) {
    unmount(oldVNode);
  }

  if (oldVNode.tag !== newVNode.tag) {
    // Если тип элемента изменился, заменяем старый элемент новым
    mount(newVNode, oldVNode.$el.parentNode);
    unmount(oldVNode);
  } else {
    // Если тип элемента не изменился, обновляем свойства
    newVNode.$el = oldVNode.$el;

    if(typeof newVNode.children === 'string') {
      newVNode.$el.textContent = newVNode.children;
    } else {
      updateProps(newVNode)


      if(typeof oldVNode.children === 'string') {
        newVNode.$el.textContent = null
        newVNode.children.forEach((child) => {
          mount(child, newVNode.$el);
        })
      } else {
        updateChildren(oldVNode, newVNode)
      }
    }
  }
}


function updateProps(element, oldProps, newProps) {
  // Удаляем старые свойства
  while (element.attributes.length > 0) {
    element.removeAttribute(element.attributes[0].name);
  }

  // Добавляем или обновляем новые свойства
  for (const [key, value] in newProps) {
    element.setAttribute(key, value);
  }
}

function updateChildren(oldVNode, newVNode) {
  // Сравниваем количество детей
  const maxLength = Math.max(oldVNode.children.length, newVNode.children.length);
  for (let i = 0; i < maxLength; i++) {
    patch(oldVNode.children[i], newVNode.children[i]);
  }

  if(oldVNode.children.length > newVNode.children.length) {
    oldVNode.children.slice(newVNode.children.length).forEach((child) => {
      unmount(child);
    }) 
  } else if(newVNode.children.length > oldVNode.children.length) {
    newVNode.children.slice(oldVNode.children.length).forEach((child) => {
      mount(child, newVNode.$el.parentNode);
    }) 
  }
}
