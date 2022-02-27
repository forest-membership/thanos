import App from './components/App';

const execute = () => {
  const root = document.getElementById('root');
  if (root) {
    new App(root);
  }
};

execute();

export {};
