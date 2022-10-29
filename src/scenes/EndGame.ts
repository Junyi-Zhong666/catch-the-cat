export class EndGame extends Phaser.Scene{
  private gameover;
  private playbutton2;
  //private soundbutton!: Phaser.GameObjects.Sprite;
  constructor(){
      super("EndGame");
  }
  preload(): void {
      this.load.setPath('assets');
      //加载图片
      this.load.image("gameover","gameover.jpg");
      this.load.image("playbutton2","play.jpg");
  
  }
  
  create(): void {
      //console.log('create');
      //添加游戏标题
      this.gameover = this.add.image(400,400,'gameover');
      
      //添加开始游戏按钮
      this.playbutton2=this.add.image(440,730,'playbutton2').setInteractive();

      this.playbutton2.on('pointerdown',(event)=>{
          this.scene.stop('PlayScene');
          this.scene.start('StartGame');//鼠标点击回到开始游戏界面
      })
      
  }
}
  