import { createStore } from "./core/Store.js";

const initState = {
  a: 10,
  b: 20,
  canvasSize: 400,
};

export const SET_A = "SET_A";
export const SET_B = "SET_B";
export const RESIZE_CANVAS = "RESIZE_CANVAS";

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case "SET_A":
      return { ...state, a: action.payload };
    case "SET_B":
      return { ...state, b: action.payload };
    case "RESIZE_CANVAS":
      return { ...state, canvasSize: action.payload };
    default:
      return state;
  }
});

export const setA = (payload) => ({ type: SET_A, payload });
export const setB = (payload) => ({ type: SET_B, payload });
export const resizeCanvas = (payload) => ({ type: RESIZE_CANVAS, payload });
