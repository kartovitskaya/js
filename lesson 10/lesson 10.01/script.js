let body = document.querySelector('body'),
  newElem;
  const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  };
  
  DomElement.prototype.createElem = function () {
    if (this.selector[0] === '.') {
      newElem = document.createElement('div');
    } else if (this.selector[0] === '#') {
      newElem = document.createElement('p');

    }
  
    newElem.style.cssText = 
    `height: ${this.height};
      width: ${this.width};
      background:${this.bg};
      font-size: ${this.fontSize}`;
  };

  const newDomElement = new DomElement('#line', '10px', '100px', 'white', '20px');
  newDomElement.text = 'JavaScript';
  
  document.body.append(newDomElement);
  console.log(newDomElement);
