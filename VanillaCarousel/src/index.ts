const findRootFunction = () => {
  const root = document.getElementById('root');

  if (root) {
    root.innerHTML = `<h1>Hello World!!</h1>`;
  }
};

findRootFunction();

export {};
