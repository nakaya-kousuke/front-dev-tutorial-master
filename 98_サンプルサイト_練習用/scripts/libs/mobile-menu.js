class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.cover = document.querySelector('.mobile-menu__cover');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this._getEventType();
    this._addEvent();
  }

// windowにontouchstartがあれば、スマートフォンでの操作。ontouchstartがなければ、PCでの操作に切り替える機能
  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }

// '.mobile-menu__btn'に'menu-open'を追加したり消したりする機能
  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}