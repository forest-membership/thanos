import { Component } from '@/components/Core';

export class Content extends Component {
  template() {
    return '<div id="content"></div>';
  }
  setEvent() {
    this.addEvent({
      eventType: 'click',
      selector: '#nextPicture',
      callback: ({ target }) => {
        // 여기에는 바로 다음 사진이 첫번째로 변경하도록 하는 로직이 필요
        alert('우측');
      },
    });
    this.addEvent({
      eventType: 'click',
      selector: '#prevPicture',
      callback: ({ target }) => {
        // 여기에는 바로 다음 사진이 첫번째로 변경하도록 하는 로직이 필요
        alert('좌측');
      },
    });
  }
}
