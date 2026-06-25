import Phaser from "phaser";
import MainScene from "./scenes/MainScene";

export const StartGame = (parent: string) => {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent,
    backgroundColor: "#f0f0f0",
    scene: [MainScene],
  });
};