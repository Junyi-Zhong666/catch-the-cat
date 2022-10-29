import 'phaser';
//import { BootScene } from './scenes/boot';
import PlayScene from "./scenes/play";
import { StartGame } from './scenes/StartGame';
import { EndGame } from './scenes/EndGame';
import { VictoryGame } from './scenes/Victory';
import data from './data';

export default class CatchTheCatGame extends Phaser.Game {
  //public readonly BootSene: BootScene;
  public readonly mainScene: PlayScene;
  public readonly StartGame: StartGame;
  public readonly EndScene: EndGame;
  public readonly VictoryScene: VictoryGame;
  //public readonly myConfig: CatchTheCatGameConfig;
  constructor(config: CatchTheCatGameConfig) {
    
    let w = config.w;
    let h = config.h;
    let r = config.r * window.devicePixelRatio;
    let canvasZoom = 1 / window.devicePixelRatio;
    let canvasWidth = Math.floor((6.5 + 2 * w) * r);
    let canvasHeight = Math.floor((6 + Math.sqrt(3) * h) * r);
    //let bootScene = new BootScene;
    let playscene = new PlayScene(w, h, r);
    let startscene = new StartGame;
    let endscene = new EndGame;
    let victoryscene = new VictoryGame;
    const gameConfig:Phaser.Types.Core.GameConfig = {
        width: canvasWidth,
        height: canvasHeight,
        type: Phaser.AUTO,
        parent: config.parent,
        backgroundColor: config.backgroundColor,
        scene: [startscene,playscene,victoryscene,endscene],
        zoom: canvasZoom,
    };
    super(gameConfig);
   //this.BootSene = bootScene;
   this.mainScene = playscene;
   this.StartGame = startscene;
   this.VictoryScene = victoryscene;
   this.EndScene = endscene;
  }
}

window.addEventListener('load', () => {
  const game =  new CatchTheCatGame(data.myconfig);
});


