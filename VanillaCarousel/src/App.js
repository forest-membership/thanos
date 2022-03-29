import { Component } from "./core/Component.js";
import { Canvas } from "../src/Canvas/index.js";
import { trigerByRAF, resizeWindow } from "./utils/index.js";
import { ColorTheme1 } from "./utils/constants.js";
import { drawHalfCircle } from "./utils/index.js";

export class App extends Component {
  template() {
    return `${Canvas()}`;
  }

  setCss() {
    const body = document.querySelector("body");
    if (body) {
      body.style.background = ColorTheme1.background;
      resizeWindow();
    }
  }

  firstDrawCanvas() {
    //물결을 여기서 표시해야 함
    const myCanvas = document.querySelector("#myCanvas");
    const ctx = myCanvas.getContext("2d");
    drawHalfCircle(ctx, (Math.PI / 180) * -20, (Math.PI / 180) * 200, "blue");
  }

  setEvent() {
    window.addEventListener("resize", trigerByRAF(resizeWindow));
  }
}
