export class Component {
  protected target: Element;
  protected state: any;
  protected props: any;
  constructor(target: Element, props?: any) {
    this.target = target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup(arg?: any) {}
  template(arg?: any) {
    return '';
  }
  render() {
    this.target.innerHTML += this.template();
    this.mounted();
  }
  setEvent() {}
  setState(newState: any) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  addEvent({ eventType, selector, callback }: { eventType: string; selector: string; callback: (event: Event) => void }) {
    const children = [...this.target.querySelectorAll(selector)];
    const isTarget = (target: Element) => children.includes(target) || target.closest(selector);
    this.target.addEventListener(eventType, (event) => {
      console.log(selector);
      event.preventDefault();
      if (event.target instanceof Element) {
        if (!isTarget(event.target)) {
          return false;
        }
        callback(event);
        return true;
      }
      return false;
    });
  }
  mounted() {}
}
