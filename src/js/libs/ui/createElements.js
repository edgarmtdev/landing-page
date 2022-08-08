"use strict";

export default function createElement(type, attrs, content, events) {
  const element = document.createElement(type);

  Object.keys(attrs).map((attr) => {
    element.setAttribute(attr, attrs[attr]);
  });

  element.innerText = content;

  return element;
}
