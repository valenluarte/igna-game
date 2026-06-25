import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Text;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("MainScene");
  }

  create() {
    this.player = this.add.text(400, 300, "🙂", {
      fontSize: "48px",
    });

    this.cursors = this.input.keyboard!.createCursorKeys();
  }

  update() {
    const speed = 3;

    if (this.cursors.left.isDown) {
      this.player.x -= speed;
    }

    if (this.cursors.right.isDown) {
      this.player.x += speed;
    }

    if (this.cursors.up.isDown) {
      this.player.y -= speed;
    }

    if (this.cursors.down.isDown) {
      this.player.y += speed;
    }
  }
}