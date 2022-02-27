import { Component } from '../Core';

class MainHeader extends Component {
  setup() {
    this.state = 'Carousel';
  }
  template() {
    return `<h1>${this.state}</h1>`;
  }
}

export { MainHeader };
