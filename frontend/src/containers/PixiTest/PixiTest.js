import React, { PropTypes } from 'react';
import styles from './styles.scss';
import * as Pixi from 'pixi.js';
console.log(Pixi)

class PixiTest extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)

    this.renderer = PIXI.autoDetectRenderer(800, 800,
      {antialias: false, transparent: true, resolution: 1}
    );
    this.stage = new PIXI.Container();

    this.state = {};
  }

  componentDidMount () {
    this.pixiSetup();
    this.drawBox();
  }

  pixiSetup = () => {
    this.pixicontainer.appendChild(this.renderer.view);
    this.renderer.render(this.stage);
  }

  drawBox = () => {
    this.pixiShape = new PIXI.Graphics();
    this.pixiShape.lineStyle(2, 0x95302B, 1);
    this.pixiShape.beginFill(0x66CCFF);
    this.pixiShape.drawRect(0, 0, 64, 64);
    this.pixiShape.endFill();
    this.pixiShape.x = 170;
    this.pixiShape.y = 170;
    this.stage.addChild(this.pixiShape);

    this.renderer.render(this.stage);
  }

  moveTo = () => {
    this.pixiShape.x = 400;
    this.pixiShape.y = 400;
    // this.stage.addChild(this.pixiShape);
    this.renderer.render(this.stage);
    console.log('action')
  }

  resetPosition = () => {
    this.pixiShape.x = 170;
    this.pixiShape.y = 170;

    this.renderer.render(this.stage);
  }

  render() {
    return (
      <div
        className={styles.PixiTest}
        ref={c => this.pixicontainer = c}
      >
        <button onClick={this.handleAction}>action</button>
        <button onClick={this.resetPosition}>reset</button>
      </div>
    )
  }
}

export default PixiTest
