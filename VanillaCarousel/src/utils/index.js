import { store, resizeCanvas } from "../store.js";

export const trigerByRAF = (cb) => {
  let rAFTimeout = null;

  return () => {
    if (rAFTimeout) {
      window.cancelAnimationFrame(rAFTimeout);
    }
    rAFTimeout = window.requestAnimationFrame(() => cb());
  };
};

export const resizeWindow = () => {
  if (window.innerWidth >= 1300) {
    store.dispatch(resizeCanvas(600));
  } else if (window.innerWidth >= 800) {
    store.dispatch(resizeCanvas(500));
  } else {
    store.dispatch(resizeCanvas(400));
  }
};

export const drawHalfCircle = (ctx, startAng, endAng, background) => {
  if (ctx) {
    ctx.beginPath();
    ctx.arc(
      store.getState().canvasSize / 2,
      store.getState().canvasSize / 2,
      store.getState().canvasSize / 2,
      startAng,
      endAng
    );
    ctx.stroke();
    ctx.fillStyle = background;
    ctx.fill();
    ctx.closePath();
  }
};
