import { Component } from '@/components/Core/index';

export class Button extends Component {
  template() {
    const { className, id, children } = this.props;
    return `<button class=${className} id=${id}>${children}</button>`;
  }
}
