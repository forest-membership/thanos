import { store } from "../store.js";
export const Canvas = () =>
  `<canvas width=${store.getState().canvasSize} height=${
    store.getState().canvasSize
  } id="myCanvas" ></canvas>`;
