
export class Coin extends Phaser.GameObjects.Image {
  private centerOfScreen: number | undefined;
  private changePositionTimer: Phaser.Time.TimerEvent | null;
  private lastPosition?: string;

  constructor(aParams: IImageConstructor) {
    super(aParams.scene, aParams.x, aParams.y, aParams.texture);
    this.changePositionTimer = null;
    this.initVariables();
    this.initImage();
    this.initEvents();

    this.scene.add.existing(this);
  }

  private initVariables(): void {
    this.centerOfScreen = this.scene.sys.canvas.width / 2;
    this.changePositionTimer = null;
    this.setFieldSide();
  }

  private initImage(): void {
    this.setOrigin(0.5, 0.5);
  }

  private initEvents(): void {
    this.changePositionTimer = this.scene.time.addEvent({
      delay: 2000,
      callback: this.changePosition,
      callbackScope: this,
      loop: true
    });
  }

  update(): void { }

  public changePosition(): void {
    if (this.changePositionTimer == null)
      return;
    this.setNewPosition();
    this.setFieldSide();

    this.changePositionTimer.reset({
      delay: 2000,
      callback: this.changePosition,
      callbackScope: this,
      loop: true
    });
  }

  private setNewPosition(): void {
    if (this.lastPosition == 'right') {
      this.x = Phaser.Math.RND.integerInRange(100, this.centerOfScreen);
    } else {
      this.x = Phaser.Math.RND.integerInRange(385, 700);
    }
    this.y = Phaser.Math.RND.integerInRange(100, 500);
  }

  private setFieldSide(): void {
    if (this.x <= this.centerOfScreen) {
      this.lastPosition = 'left';
    } else {
      this.lastPosition = 'right';
    }
  }
}
