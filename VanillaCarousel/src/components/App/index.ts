import { MainHeader } from '@/components/MainHeader';
import { Button } from '@/components/Button';
import { Component } from '../Core';
import { Content } from '@/components/Content';

class App extends Component {
  mounted() {
    new MainHeader(this.target);
    new Content(this.target);

    const contentTarget = document.getElementById('content');

    if (contentTarget) {
      new Button(contentTarget, { className: 'reOrderButton', id: 'prevPicture', children: '전' });
      new Button(contentTarget, { className: 'reOrderButton', id: 'nextPicture', children: '후' });
    }
  }
}

export default App;
