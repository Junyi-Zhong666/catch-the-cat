
export class StartGame extends Phaser.Scene{
    private gamename;
    private playbutton;
    //private soundbutton!: Phaser.GameObjects.Sprite;
    constructor(){
        super("StartGame");
    }
    preload(): void {
        this.load.setPath('assets');
        //加载图片
        this.load.image("gamename","gamename.jpg");
        this.load.image("playbutton","play.jpg");
    
    }
    
    create(): void {
        //console.log('create');
        //添加游戏标题
        this.gamename = this.add.image(400,400,'gamename');
        
        //添加开始游戏按钮
        this.playbutton=this.add.image(440,730,'playbutton').setInteractive();

        this.playbutton.on('pointerdown',(event)=>{
            this.scene.start('PlayScene');//鼠标点击开始游戏
        })
        
    }
}