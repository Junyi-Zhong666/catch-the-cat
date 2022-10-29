export class VictoryGame extends Phaser.Scene{
    private victorygame;
    private playbutton;
    //private soundbutton!: Phaser.GameObjects.Sprite;
    constructor(){
        super("VictoryGame");
    }
    preload(): void {
        this.load.setPath('assets');
        //加载图片
        this.load.image("victorygame","victorygame.jpg");
        this.load.image("playbutton","play.jpg");
    
    }
    
    create(): void {
        //console.log('create');
        //添加游戏标题
        this.victorygame = this.add.image(400,400,'victorygame');
        
        //添加开始游戏按钮
        this.playbutton=this.add.image(440,730,'playbutton').setInteractive();

        this.playbutton.on('pointerdown',(event)=>{
            this.scene.stop('PlayScene');
            this.scene.start('StartGame');//鼠标点击回到开始游戏界面
        })
        
    }
}